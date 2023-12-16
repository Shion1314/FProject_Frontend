import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";

import { logout } from "../api/Auth";

import { setUser } from "../store";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => dispatch(setUser(null))).catch((e) => { console.log(e) })
    navigate("/login");
  }, []);

  return (
    <main>
      <h2>You have been logged out.</h2>

      <Link to="/login">Login</Link>
    </main>
  );
};
