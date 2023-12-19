import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Text, Box, FormLabel, Input } from "@chakra-ui/react";
import { setSearchResults, setUniversityName } from "../store";
import { getAutofillUniversityNames } from "../api/UniversityAutofill";
import { getInfo } from "../api/University";

export const NameSearch = () => {
    const [autoFillUniversity, setAutoFillUniversity] = useState([]);
    const dispatch = useDispatch();

    const universityName = useSelector((state) => state.university.universityName);

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
                if (data.message == "University info not found for the specified name") {
                    dispatch(setSearchResults([]));
                } else {
                    dispatch(setSearchResults(Array.isArray(data) ? data : [data]));
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    return (
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
    );
};