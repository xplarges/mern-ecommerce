import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const siteName = "Site Name";
  return (
    <nav>
      <Link to="/" className="site-title">{siteName}</Link>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}
