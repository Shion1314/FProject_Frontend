import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, VStack, Select, Heading, Button, Flex, Center, Container } from '@chakra-ui/react';
import { getFavorites, removeFavorite, rankFavorite } from '../api/Favorites';
import { Navbar } from '../components/Navbar';
import { DefaultLayout } from '../layout/DefaultLayout';

const Profile = () => {
    const [favorites, setFavorites] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('user');
    const currentUser = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (currentUser) {
            getFavorites()
                .then(favoritesList => {
                    setFavorites(sortFavorites(favoritesList, sortCriteria));
                })
                .catch(error => {
                    console.error('Error fetching favorites:', error);
                });
        }
    }, [currentUser, sortCriteria]);

    const sortFavorites = (favoritesList, criteria) => {
        if (criteria === 'user') {
            return [...favoritesList].sort((a, b) => a.rank - b.rank);
        }
        return [...favoritesList].sort((a, b) => {
            switch (criteria) {
                case 'name':
                    return a.university_name.localeCompare(b.university_name);
                case 'avg_sat':
                    return b.avg_sat - a.avg_sat;
                case 'avg_act':
                    return b.avg_act - a.avg_act;
                case 'gpa_avg':
                    return b.gpa_avg - a.gpa_avg;
                case 'tuition_instate':
                    return a.tuition_instate_full - b.tuition_instate_full;
                case 'tuition_outstate':
                    return a.tuition_outstate_full - b.tuition_outstate_full;
                default:
                    return 0;
            }
        });
    };

    const handleMove = (universityId, direction) => {
        const index = favorites.findIndex(fav => fav.id === universityId);
        let newIndex = direction === 'up' ? index - 1 : index + 1;

        if (newIndex < 0 || newIndex >= favorites.length) return;

        let newFavorites = [...favorites];
        [newFavorites[index], newFavorites[newIndex]] = [newFavorites[newIndex], newFavorites[index]];

        setFavorites(newFavorites);

        rankFavorite(universityId, newIndex + 1)
            .then(() => {
                console.log(`Rank updated for universityId: ${universityId}`);
                return rankFavorite(newFavorites[newIndex].id, newIndex + 1);
            })
            .then(() => {
                console.log("Both ranks updated successfully");
            })
            .catch(error => {
                console.error("Error updating ranks:", error);
                setFavorites([...favorites]);
            });
    };

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };


    const handleRemoveFavorite = (universityId) => {
        removeFavorite(universityId)
            .then(() => {
                setFavorites(favorites.filter(fav => fav.id !== universityId));
            })
            .catch(error => {
                console.error('Error removing favorite:', error);
            });
    };

    if (!currentUser) {
        return <Text>You must be logged in to view this page.</Text>;
    }

    return (
        <DefaultLayout>
            <Container maxW="5xl">
                <VStack spacing={4} align="stretch">
                    <Heading as="h3" size="lg" textAlign="center" my={4}>Favorite Colleges</Heading>
                    <Select value={sortCriteria} onChange={handleSortChange}>
                        <option value="user">Sort by User</option>
                        <option value="name">Sort by Name</option>
                        <option value="avg_sat">Sort by Avg SAT</option>
                        <option value="avg_act">Sort by Avg ACT</option>
                        <option value="tuition_instate">Sort by Tuition In-State</option>
                        <option value="tuition_outstate">Sort by Tuition Out-State</option>
                    </Select>
                    {favorites.length > 0 ? (
                        favorites.map((univ, index) => (
                            <Flex key={index} p={5} pr={50} shadow="md" borderWidth="1px" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Text fontSize="xl">{univ.university_name}</Text>
                                    <Text>Avg SAT: {univ.avg_sat}</Text>
                                    <Text>Avg ACT: {univ.avg_act}</Text>
                                    <Text>Tuition In-State: ${univ.tuition_instate_full}</Text>
                                    <Text>Tuition Out-State: ${univ.tuition_outstate_full}</Text>
                                </Box>
                                <Flex alignItems="center">
                                    {sortCriteria === 'user' && (
                                        <Flex mr="5px">
                                            <Button colorScheme="blue" onClick={() => handleMove(univ.id, 'up')}>Up</Button>
                                            <Button colorScheme="orange" ml="5px" onClick={() => handleMove(univ.id, 'down')}>Down</Button>
                                        </Flex>
                                    )}
                                    <Button colorScheme="red" onClick={() => handleRemoveFavorite(univ.id)}>Remove</Button>
                                </Flex>
                            </Flex>
                        ))
                    ) : (
                        <Center>
                            <Text fontSize="xl" color="gray.500">No favorite universities to display.</Text>
                        </Center>
                    )}
                </VStack>
            </Container>
        </DefaultLayout>
    );
};

export default Profile;
