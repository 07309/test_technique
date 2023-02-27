import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom'
import logo from '../assets/sappy.svg'
import { FaRegFileAlt, FaRegFolder, FaRegCalendarAlt, FaChartBar, FaGripHorizontal} from 'react-icons/fa';


function Navbar() {
  return (
    <nav class="nav">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </NavLink>
      </div>
      <div className="navbar-tabs">
        <ul>
          <li>
            <NavLink to="/"><FaChartBar className="fa"/>Tableau de bord</NavLink>
          </li>
          <li>
            <NavLink to="/"><FaRegCalendarAlt className="fa"/>Planning</NavLink>
          </li>
          <li>
            <NavLink to="/"><FaGripHorizontal className="fa"/>Missions</NavLink>
          </li>
          <li>
            <NavLink to="/"><FaRegFolder className="fa"/>Cahier de transmission</NavLink>
          </li>
          <li>
            <NavLink to="/"><FaRegFileAlt className="fa"/>Contrat</NavLink>
          </li>
        </ul>
      </div>
      <div className="user">
          <h4>Linda C.</h4>
      </div>
    </nav>
  );
}

export default Navbar;