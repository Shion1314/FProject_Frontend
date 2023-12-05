import { callApi } from "../utils/call-api";

/**
 * Gets the currently logged in user.
 * @returns A promise that resolves to the current user
 */
export const getMe = () => {
  return callApi("/auth/@me");
};

/**
 * Logs in a user with the given email and password. This will set a session cookie.
 * @param {string} email
 * @param {string} password
 * @returns A promise that resolves with information of the logged in user
 */
export const login = (email, password) => {
  return callApi("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

/**
 * Logs out the current user. This will destroy and clear the session cookie.
 * @returns A promise that resolves when the user is logged out
 */
export const logout = () => {
  return callApi("/auth/logout", {
    method: "POST",
  });
};

/**
 * Registers a new user with the given information. The user will be logged in after registration,
 * and a session cookie will be set.
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} password
 * @returns A promise that resolves once the user is registered
 */
export const register = (firstName, lastName, email, password) => {
  return callApi("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });
};
