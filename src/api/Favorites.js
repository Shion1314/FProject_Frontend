import { callApi } from "../utils/call-api";

/**
 * Adds a university to the list of favorites for the current user
 * @param {string} universityId The ID of the university to add
 * @returns A promise that resolves when the university is favorited
 */
export const addFavorite = (universityId) => {
  return callApi("/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      universityId,
    }),
  });
};

/**
 * Retrieves the list of favorited universities for the current user
 * @returns A promise that resolves to an array of favorited universities
 */
export const getFavorites = () => {
  return callApi("/favorites").then((data) => data.favorites);
};

/**
 * Removes a university from the list of favorites for the current user
 * @param {string} universityId The ID of the university to remove
 * @returns A promise that resolves when the university is unfavorited
 */
export const removeFavorite = (universityId) => {
  return callApi(`/favorites/${universityId}`, {
    method: "DELETE",
  });
};

/**
 * Changes the rank of a favorited university for the current user. The university will be swapped with the university
 * that is currently at the specified rank.
 * @param {string} universityId The ID of the university to change the rank of
 * @param {number} newRank The new rank to set for the specified university ID. Must be between 1 and the number of
 * favorited universities.
 * @returns A promise that resolves when the ranking for the university is updated
 */
export const rankFavorite = (universityId, newRank) => {
  return callApi(`/favorites/${universityId}/rank`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newRank,
    }),
  });
};
