import React, { useState } from "react";
import { getInfo } from "../api/University";
import { updateUniversity } from "../api/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setUniversityName, setSearchResults, setSat_score, setGPA, setTuition_in, setTuition_out,setMajor } from "../store";
import { getAutofillUniversityNames } from "../api/UniversityAutofill";

export const UniversitySearch = () => {
  const [autoFillUniversity, setAutoFillUniversity] = useState([]);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(true);
  const dispatch = useDispatch();

  const universityName = useSelector((state) => state.university.universityName);
  const searchResults = useSelector((state) => state.university.searchResults);
  const sat_score = useSelector((state) => state.university.sat_score);
  const AVG_GPA = useSelector((state) => state.university.GPA_score);
  const tution_in=useSelector((state) => state.university.tuition_instate_full);
  const tution_out=useSelector((state) => state.university.tuition_outstate_full);
  const major=useSelector((state) => state.university.popular_major);

  const handleFormChange = (input) => {
    dispatch(setUniversityName(input));
    if (input && input.length > 2) {
      getAutofillUniversityNames(input).then((data) => {
        let autoFillList = [];
        data.results.forEach((u) => {
          autoFillList = [...autoFillList, u["school.name"]];
        });
        setAutoFillUniversity(autoFillList);
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    document.getElementById("autoFill").style.display = "none";

    const searchParameters = {
      university_name: universityName,
    };

    getInfo(searchParameters)
      .then((data) => {
        dispatch(setSearchResults(Array.isArray(data) ? data : [data]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleFormSubmit2 = (e) => {
    
    e.preventDefault();
    const autoFillElement = document.getElementById("autoFill");
    if (autoFillElement) {
      autoFillElement.style.display = "none";
    }
    console.log("SAT Score:", sat_score);
    console.log("GPA Score:", AVG_GPA);
    const searchParameters2 = {
      avg_sat: sat_score,
      gpa_avg: AVG_GPA,
      tuition_instate_full:tution_in,
      tuition_outstate_full:tution_out,
      popular_major:major,
    };

    getInfo(searchParameters2)
      .then((data) => {
        dispatch(setSearchResults(Array.isArray(data) ? data : [data]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const toggleSearchForm = () => {
    setIsSearchFormVisible(!isSearchFormVisible);
    
  };
  const currentUser = useSelector((state) => state.auth.user);
  
  console.log("hello"+currentUser);
  return (
    <div>
      
      <button onClick={toggleSearchForm}>
        {isSearchFormVisible ? "Filter mode" : "Search University mode"}
      </button>

   {isSearchFormVisible && currentUser && (
        <form onSubmit={handleFormSubmit} autoComplete="off" style={{ flexDirection: "row" }}>
          <label>University Name:</label>
          <div style={{ position: "relative", marginLeft: "20px", marginRight: "20px" }}>
            <input
              type="text"
              name="university_name"
              value={universityName}
              onChange={(university) => handleFormChange(university.target.value)}
              onFocus={() => {
                document.getElementById("autoFill").style.display = "block";
              }}
            />
            <div id="autoFill" style={{ position: "absolute", width: "100%", top: "38px" }}>
              {autoFillUniversity.map((universityName) => (
                <button
                  key={universityName}
                  className="autoFillItem"
                  style={{ width: "100%" }}
                  onClick={() => {
                    dispatch(setUniversityName(universityName));
                    document.getElementById("autoFill").style.display = "none";
                  }}
                >
                  <p style={{ margin: "10px" }}>{universityName}</p>
                </button>
              ))}
            </div>
          </div>
          <button type="submit">Search</button>
        </form>
      )}

      {!isSearchFormVisible &&currentUser&& (
        <form onSubmit={handleFormSubmit2}>
        <label>
          SAT Score:
          <input
            type="number"
            name="avg_sat"
            value={sat_score}
            onChange={(SAT)=> dispatch(setSat_score(SAT.target.value))}
          />
        </label>

        <label>
          GPA Score:
          <input
            type="number"
            name="GPA"
            value={AVG_GPA}
            onChange={(GPA)=> dispatch(setGPA(GPA.target.value))}
          />
        </label>

        <label>
          Expected tution in state:
          <input
            type="number"
            name="tution_in"
            value={tution_in}
            onChange={(tution_)=> dispatch(setTuition_in(tution_.target.value))}
          />
        </label>
        <label>
          Expected tution out state:
          <input
            type="number"
            name="tution_in"
            value={tution_out}
            onChange={(tution_)=> dispatch(setTuition_out(tution_.target.value))}
          />
        </label>

        <label>
         Major:
          <input
            type="text"
            name="major"
            value={major}
            onChange={(major)=> dispatch(setMajor(major.target.value))}
          />
        </label>

        <button type="submit">Search</button>
      </form>
      )}

      {searchResults && searchResults.length > 0 && currentUser&& (
        <table>
          <thead>
            <tr>
              <th>University Name</th>
              <th>Avg_SAT</th>
              <th>Avg_ACT</th>
              <th>GPA Average</th>
              <th>Admissions_rate</th>
              <th>Tuition_instate</th>
              <th>Tuition_outstate</th>
              <th>Pouplar Major</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index}>
                <td>{result.university_name}</td>
                <td>{result.avg_sat}</td>
                <td>{result.avg_act}</td>
                <td>{result.gpa_avg}</td>
                <td>{result.admissions_rate}</td>
                <td>{result.tuition_instate_full}</td>
                <td>{result.tuition_outstate_full}</td>
                <td>{result.popular_major}</td>
                <td>
                <button
onClick={() => {
  const favoriteUniversity = result.university_name;
console.log(currentUser.email)
console.log(currentUser.university)

  if (currentUser.university !== null ) {
   

      const userConfirmed = window.confirm(
        `You already have a favorite university. Do you still want to add ${favoriteUniversity}?`
      );

      if (!userConfirmed) {
    
        return;
      }
    
  }

  // Update the favorite university
  updateUniversity(currentUser.id, favoriteUniversity);
}}
>
  Add favorite
</button>

          </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
