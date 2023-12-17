import React, { useEffect, useState } from "react";
import { getInfo } from "../api/University";
import { useDispatch, useSelector } from "react-redux";
import { setUniversityName, setSearchResults, setSat_score, setGPA, setTuition_in, setTuition_out, setMajor } from "../store";
import { getAutofillUniversityNames } from "../api/UniversityAutofill";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Button, Flex, Text, Box, FormLabel, Input, Container, TableContainer, Table, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";
import { addFavorite, getFavorites, removeFavorite } from "../api/Favorites";

export const UniversitySearch = () => {
  const [autoFillUniversity, setAutoFillUniversity] = useState([]);
  const [favoriteUniversity, setFavoriteUniversity] = useState([]);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(true);
  const dispatch = useDispatch();

  const universityName = useSelector((state) => state.university.universityName);
  const searchResults = useSelector((state) => state.university.searchResults);
  const sat_score = useSelector((state) => state.university.sat_score);
  const AVG_GPA = useSelector((state) => state.university.GPA_score);
  const tution_in = useSelector((state) => state.university.tuition_instate_full);
  const tution_out = useSelector((state) => state.university.tuition_outstate_full);
  const major = useSelector((state) => state.university.popular_major);

  useEffect(() => {
    getFavorites().then((data) => {
      let favoriteId = [];
      data.map((u) => {
        favoriteId = [...favoriteId, u.id];
      })
      setFavoriteUniversity(favoriteId);
    })
  }, [])

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
    const searchParameters2 = {
      avg_sat: sat_score,
      gpa_avg: AVG_GPA,
      tuition_instate_full: tution_in,
      tuition_outstate_full: tution_out,
      popular_major: major,
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

  return (
    <DefaultLayout>
      <Button colorScheme="purple" onClick={toggleSearchForm}>
        {isSearchFormVisible ? "Filter mode" : "Search University mode"}
      </Button>
      <Container>
        {isSearchFormVisible && currentUser && (
          <Flex w="100%" justifyContent="center">
            <form onSubmit={handleFormSubmit} autoComplete="off" style={{ flexDirection: "row" }}>
              <FormLabel>University Name:</FormLabel>
              <Box position="relative" minW="20vw">
                <Input
                  type="text"
                  name="university_name"
                  value={universityName}
                  onChange={(university) => handleFormChange(university.target.value)}
                  onFocus={() => {
                    document.getElementById("autoFill").style.display = "block";
                  }}
                />
                <Box id="autoFill" style={{ position: "absolute", width: "100%", top: "40px" }}>
                  {autoFillUniversity.map((universityName) => (
                    <Button
                      key={universityName}
                      className="autoFillItem"
                      onClick={() => {
                        dispatch(setUniversityName(universityName));
                        document.getElementById("autoFill").style.display = "none";
                      }}
                    >
                      <Text style={{ margin: "10px" }}>{universityName}</Text>
                    </Button>
                  ))}
                </Box>
              </Box>
              <Button type="submit" colorScheme="purple" mx="5" minW="80px">Search</Button>
            </form>
          </Flex>
        )}

        {!isSearchFormVisible && currentUser && (
          <form onSubmit={handleFormSubmit2}>
            <FormLabel>
              SAT Score:
            </FormLabel>
            <Input
              type="number"
              name="avg_sat"
              value={sat_score}
              onChange={(SAT) => dispatch(setSat_score(SAT.target.value))}
            />

            <FormLabel>
              GPA Score:
            </FormLabel>
            <Input
              type="number"
              name="GPA"
              value={AVG_GPA}
              onChange={(GPA) => dispatch(setGPA(GPA.target.value))}
            />

            <FormLabel>
              Expected tution in state:
            </FormLabel>
            <Input
              type="number"
              name="tution_in"
              value={tution_in}
              onChange={(tution_) => dispatch(setTuition_in(tution_.target.value))}
            />
            <FormLabel>
              Expected tution out state:
            </FormLabel>
            <Input
              type="number"
              name="tution_in"
              value={tution_out}
              onChange={(tution_) => dispatch(setTuition_out(tution_.target.value))}
            />

            <FormLabel>
              Major:
            </FormLabel>
            <Input
              type="text"
              name="major"
              value={major}
              onChange={(major) => dispatch(setMajor(major.target.value))}
            />
            <Button type="submit" colorScheme="purple">Search</Button>
          </form>
        )}
      </Container>

      {searchResults && searchResults.length > 0 && currentUser && (
        <TableContainer mx="4">
          <Table colorScheme="purple" size="md">
            <Thead>
              <Tr>
                <Th>University Name</Th>
                <Th>Avg_SAT</Th>
                <Th>Avg_ACT</Th>
                <Th>GPA Average</Th>
                <Th>Admissions_rate</Th>
                <Th>Tuition_instate</Th>
                <Th>Tuition_outstate</Th>
                <Th>Pouplar Major</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchResults.map((result, index) => (
                <Tr key={index} bg={favoriteUniversity.includes(result.id) ? "#F0E3FF" : ""}>
                  <Td maxW="150px" whiteSpace="normal">{result.university_name}</Td>
                  <Td>{result.avg_sat == 0 ? "-" : result.avg_sat}</Td>
                  <Td>{result.avg_act == 0 ? "-" : result.avg_act}</Td>
                  <Td>{result.gpa_avg}</Td>
                  <Td>{`${result.admissions_rate}%`}</Td>
                  <Td>{`$${result.tuition_instate_full}`}</Td>
                  <Td>{`$${result.tuition_outstate_full}`}</Td>
                  <Td maxW="150px" whiteSpace="normal">{result.popular_major}</Td>
                  <Td>
                    {favoriteUniversity.includes(result.id) ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          removeFavorite(result.id).then(() => {
                            setFavoriteUniversity(favoriteUniversity.filter((favorites) => favorites !== result.id));
                          })
                        }}
                      >
                        Remove favorite
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          addFavorite(result.id).then(() => {
                            setFavoriteUniversity([...favoriteUniversity, result.id]);
                          })
                        }}
                      >
                        Add favorite
                      </Button>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </DefaultLayout>
  );
};
