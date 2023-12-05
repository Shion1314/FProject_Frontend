const BASE_URL = "http://localhost:3000";

/**
 * Calls an API endpoint. If the response is not ok, an error is thrown with the
 * message from the API.
 * @param {*} endpoint The endpoint to call, relative to the base URL.
 * @param {*} options Options to pass to the fetch call.
 * @returns A promise that resolves to the response data.
 */
export const callApi = async (endpoint, options = {}) => {
  const url = new URL(endpoint, BASE_URL);

  const res = await fetch(url, {
    credentials: "include",
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};
