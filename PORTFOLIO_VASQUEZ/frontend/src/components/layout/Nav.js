import React from 'react';
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css'
const Nav= (props)=>{
    return(
        <div className="container">
          
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink activeClassName="activo" exact to="/">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="activo" exact to="/vermas">VER MÁS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="activo" exact to="/hazlotu">HAZLO TÚ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="activo" exact to="/contacto">CONTACTO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="activo" exact to="">- Vanesa Vasquez -</NavLink>
          </li>
        </ul>
        

    </div>
    );
}
export default Nav;