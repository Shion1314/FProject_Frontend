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
