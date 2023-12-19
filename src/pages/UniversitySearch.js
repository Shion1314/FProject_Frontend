import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Button, Container, Text } from "@chakra-ui/react";
import { NameSearch } from "../components/NameSearch";
import { FilterSearch } from "../components/FilterSearch";
import { SearchResults } from "../components/SearchResults";

export const UniversitySearch = () => {
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(true);

  const searchResults = useSelector((state) => state.university.searchResults);

  const toggleSearchForm = () => {
    setIsSearchFormVisible(!isSearchFormVisible);

  };
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <DefaultLayout>
      <Button colorScheme="purple" onClick={toggleSearchForm}>
        {isSearchFormVisible ? "Filter mode" : "Search University mode"}
      </Button>
      <Container maxW="5xl" centerContent>
        {isSearchFormVisible && currentUser && (
          <NameSearch />
        )}
        {!isSearchFormVisible && currentUser && (
          <FilterSearch />
        )}
      </Container>

      {searchResults && currentUser &&
        (searchResults.length == 0 ?
          (
            <Container centerContent>
              <Text fontWeight="semibold" py="10">
                No Results Found
              </Text>
            </Container>
          ) : (
            <SearchResults results={searchResults} />
          ))}
    </DefaultLayout>
  );
};
