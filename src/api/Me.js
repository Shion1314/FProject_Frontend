import { callApi } from "../utils/call-api";

/**
 * Change the password of the currently logged in user.
 * @param {string} oldPassword The old password of the user. This is used to confirm the change.
 * @param {string} newPassword The new password of the user.
 * @returns A promise that resolves when the password is successfully changed
 */
export const changePassword = (oldPassword, newPassword) => {
  return callApi("/@me/change-password", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword,
      oldPassword,
    }),
  });
};

/**
 * Deletes the account of the currently logged in user.
 * @param {string} password The password of the user to confirm the deletion
 * @returns A promise that resolves when the account is successfully deleted
 */
export const deleteAccount = (password) => {
  return callApi("/@me", {
    method: "DELETE",
  });
};

/**
 * Gets the currently logged in user.
 * @returns A promise that resolves to the current user
 */
export const getMe = () => {
  return callApi("/@me");
};
