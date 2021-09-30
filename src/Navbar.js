import { useState } from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const [name, setName] = useState('Matthew Linder');

  return ( 
    <header>
      <h1>{ name }</h1>
      <nav>
        <ul className="links">
          <li><NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + '/'}>About me</NavLink></li>
          <li><NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + '/portfolio'}>Portfolio</NavLink></li>
          {/* <li><NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink></li> */}
          <li><NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + '/resume'}>Resume</NavLink></li>
        </ul>
      </nav>
    </header>
   );
}
 
export default Navbar;