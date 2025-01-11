import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import "./Navbar.css";

export default function Navbar() {
  const siteName = "Site Name";
  const [menuIsOpen, menuSetIsOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="site-title">
        {siteName}
      </Link>
      <div className="menu" onClick={() => menuSetIsOpen(!menuIsOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuIsOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
}
