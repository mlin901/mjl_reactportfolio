import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [name, setName] = useState('Matthew Linder');

  return ( 
    <nav>
      <h1>{ name }</h1>
      <ul className="links">
        <li><Link to="/">About me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
      {/* <div className="links">
        <Link to="/">About me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div> */}
    </nav>
   );
}
 
export default Navbar;