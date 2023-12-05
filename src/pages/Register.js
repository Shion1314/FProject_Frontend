import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { getMe, register } from "../api/Auth";

import { setUser } from "../store";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await register(firstName, lastName, email, password).then(getMe);

      setErrorMessage(null);

      dispatch(setUser(user));

      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <h1>Register</h1>

      <p>
        Already have an account? <Link to="/login">Login</Link>.
      </p>

      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(firstName) => setFirstName(firstName.target.value)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(lastName) => setLastName(lastName.target.value)}
          />
        </label>

        <label>
          Email:
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

        <button type="submit">Register</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </main>
  );
};
