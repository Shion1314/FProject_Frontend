import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../api/Auth";

import { setUser } from "../store";

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    logout().then(() => dispatch(setUser(null)));
  }, []);

  return (
    <main>
      <h2>You have been logged out.</h2>

      <Link to="/login">Login</Link>
    </main>
  );
};
