import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand text-info" to="/">
          Lending Club
        </Link>

        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active ">
            <Link className="nav-link text-primary" to="/graphs">
              Graphs
            </Link>
          </li>
        </ul>
       
      </nav>
    </div>
  );
};

export default Nav;
