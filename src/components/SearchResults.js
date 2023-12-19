import { Button, TableContainer, Table, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";
import { addFavorite, getFavorites, removeFavorite } from "../api/Favorites";
import { useEffect, useState } from "react";
import { UniversityWebsiteLink } from "./UniversityWebsiteLink";

export const SearchResults = ({ results }) => {
    const [favoriteUniversity, setFavoriteUniversity] = useState([]);

    useEffect(() => {
        getFavorites().then((data) => {
            let favoriteId = [];
            data.map((u) => {
                favoriteId = [...favoriteId, u.id];
            })
            setFavoriteUniversity(favoriteId);
        })
    }, [])
    return (
        <TableContainer mx="4">
            <Table colorScheme="purple" size="md">
                <Thead>
                    <Tr>
                        <Th>University Name</Th>
                        <Th>Website</Th>
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
                    {results.map((result) => (
                        <Tr key={result.university_name} bg={favoriteUniversity.includes(result.id) ? "#F0E3FF" : ""}>
                            <Td maxW="150px" whiteSpace="normal">{result.university_name}</Td>
                            <Td maxW="130px"><UniversityWebsiteLink name={result.university_name} /></Td>
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
    );
};