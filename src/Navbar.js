import { useState } from "react";
// import { Link } from "react-router-dom";
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
          <li><NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink></li>
          <li><NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + '/resume'}>Resume</NavLink></li>
        </ul>
        {/* <ul className="links">
          <li><Link to={process.env.PUBLIC_URL + '/'}>About me</Link></li>
          <li><Link to={process.env.PUBLIC_URL + '/portfolio'}>Portfolio</Link></li>
          <li><Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link></li>
          <li><Link to={process.env.PUBLIC_URL + '/resume'}>Resume</Link></li>
        </ul> */}
      </nav>
    </header>
   );
}
 
export default Navbar;