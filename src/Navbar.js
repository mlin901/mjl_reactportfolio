import { useState } from "react";

const Navbar = () => {
  const [name, setName] = useState('My Name********');

  return ( 
    <nav className="navbar">
      <h1>{ name }</h1>
      <div className="links">
        <a href="/">About me</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <a href="/resume">Resume</a>
      </div>
    </nav>
   );
}
 
export default Navbar;