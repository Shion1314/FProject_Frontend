import React, { useState } from "react";
import { getInfo } from "../api/University";
import { useDispatch, useSelector } from "react-redux";
import { setUniversityName, setSearchResults } from "../store";
import { getAutofillUniversityNames } from "../api/UniversityAutofill";

export const UniversitySearch = () => {
  const [autoFillUniversity, setAutoFillUniversity] = useState([]);
  const dispatch = useDispatch();

  const universityName = useSelector((state) => state.university.universityName);
  const searchResults = useSelector((state) => state.university.searchResults);

  const handleFormChange = (input) => {
    dispatch(setUniversityName(input))
    if (input && input.length > 2) {
      getAutofillUniversityNames(input).then((data) => {
        let autoFillList = [];
        data.results.forEach((u) => {
          autoFillList = [...autoFillList, u["school.name"]];
        })
        setAutoFillUniversity(autoFillList);
      })
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    document.getElementById("autoFill").style.display = "none";

    const SearchParameter = {
      university_name: universityName,
    };

    getInfo(SearchParameter)
      .then((data) => {
        dispatch(setSearchResults(Array.isArray(data) ? data : [data]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div>
      <div className="user">
        {" "}
        <link></link>
      </div>
      <form onSubmit={handleFormSubmit} autoComplete="off" style={{ flexDirection: "row" }}>
        <label>
          University Name:
        </label>
        <div style={{ position: "relative", marginLeft: "20px", marginRight: "20px" }}>
          <input
            type="text"
            name="university_name"
            value={universityName}
            onChange={(university) => handleFormChange(university.target.value)}
            onFocus={() => {document.getElementById("autoFill").style.display = "block"}}
            
          />
          <div id="autoFill" style={{ position: "absolute", width: "100%", top: "38px"}}>
            {autoFillUniversity.map((universityName) => (
              <button 
                key = {universityName}
                className="autoFillItem" 
                style={{ width: "100%" }} 
                onClick={() => {
                  dispatch(setUniversityName(universityName));
                  document.getElementById("autoFill").style.display = "none";
                }}>
                <p style={{margin: "10px"}}>{universityName}</p>
              </button>
            ))}
          </div>
        </div>

        <button type="submit">Search</button>
      </form>

      {searchResults && searchResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>University Name</th>
              <th>SAT_25th</th>
              <th>SAT_75th</th>
              <th>ACT_25th</th>
              <th>GPA Average</th>
              <th>Admissions_rate</th>
              <th>Tuition_instate</th>
              <th>Tuition_outstate</th>
              <th>Pouplar Major</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index}>
                <td>{result.university_name}</td>
                <td>{result.sat_score_25th}</td>
                <td>{result.sat_score_75th}</td>
                <td>{result.act_score_25th}</td>
                <td>{result.gpa_avg}</td>
                <td>{result.admissions_rate}</td>
                <td>{result.tuition_instate_full}</td>
                <td>{result.tuition_outstate_full}</td>
                <td>{result.popular_major}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
