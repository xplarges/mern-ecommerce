import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Home, Auth } from "./pages/index.js";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
