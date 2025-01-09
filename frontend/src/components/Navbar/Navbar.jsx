import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <img src="/src/assets/react.svg"></img>
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
  );
}
