import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../api/Auth";

import { setUser } from "../store";

export const Login = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.user);

  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await login(email, password);

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
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {currentUser && (
        <div>
          <h2>Logged in as {currentUser.firstName}</h2>
        </div>
      )}
    </main>
  );
};
