import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/instragram">Instragram</NavLink>
  </nav>
);

export default Navbar;
