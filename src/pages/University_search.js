import React from "react";
import { getInfo } from "../api/University";
import { useDispatch, useSelector } from "react-redux";
import { setUniversityName, setSearchResults } from "../store";

export const UniversitySearch = () => {
  const dispatch = useDispatch();

  const universityName = useSelector((state) => state.global.universityName);
  const searchResults = useSelector((state) => state.global.searchResults);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const SearchParameter = {
      university_name: universityName,
    };

    getInfo(SearchParameter)
      .then((data) => {
        dispatch(setSearchResults(Array.isArray(data) ? data : [data]));
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div>
      <div class="user">
        {" "}
        <link></link>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>
          University Name:
          <input
            type="text"
            name="university_name"
            value={universityName}
            onChange={(university) => dispatch(setUniversityName(university.target.value))}
          />
        </label>

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
