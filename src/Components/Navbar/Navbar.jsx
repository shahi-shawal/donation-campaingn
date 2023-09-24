import { NavLink } from "react-router-dom";
import './Nav.css'

const Navbar = () => {
    const links = 
                  <>
                      <li className="font-bold"><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/donation">Donation</NavLink></li>
                      <li><NavLink to="/statistics">Statistics</NavLink></li>
                   </>
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <img src="./images/Logo.png" alt="logo" className="w-40 h-auto" />
        </div>
        <div className="flex-none">
          <ul className=" menu-horizontal px-1">
           {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
