import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../api/Auth";

import { setUser } from "../store";

export const Login = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await login(username, password);

      dispatch(setUser(user));

      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <h1>Login</h1>

      <p>
        Don't have an account? <Link to="/register">Register</Link>.
      </p>

      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(username) => setUsername(username.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(password) => setPassword(password.target.value)}
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {user && (
        <div>
          <h2>Logged in as {user.firstName}</h2>
        </div>
      )}
    </main>
  );
};
