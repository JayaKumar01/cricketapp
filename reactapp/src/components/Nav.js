import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    props.setUser(null);
  };

  let buttons;

  if (props.user) {
    buttons = (
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to={"/"}
              onClick={handleLogout}
              className="nav-link text-light"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    buttons = (
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link text-light">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-link text-light">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav className="navbar navbar-expand navbar-light navbar-static-top">
      <div className="container">
        <Link to={"/"} className="navbar-brand text-light">
          Home
        </Link>
        {buttons}
      </div>
    </nav>
  );
};

export default Nav;
