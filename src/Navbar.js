import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState('My Name********');

  return ( 
    <nav className="navbar">
      <h1>{ name }</h1>
      <div className="links">
        <Link to="/">About me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;