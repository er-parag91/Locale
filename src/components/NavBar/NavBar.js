import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const NavBar = () => (
  <header className="header">
    <ul>
      <li>
        <NavLink to="/">
          <FormattedMessage id="nav.home" defaultMessage="Home" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/properties">Properties</NavLink>
      </li>
      <li>
        <NavLink to="/fav">Favourites</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </ul>
  </header>
);

export default NavBar;
