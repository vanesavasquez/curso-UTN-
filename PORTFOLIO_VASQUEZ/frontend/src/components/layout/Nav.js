import React from 'react';
import { Link } from "react-router-dom";
const Nav= (props)=>{
    return(
        <div className="container">
          
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/vermas">VER MÁS</Link>
          </li>
          <li className="nav-item">
            <Link to="/hazlotu">HAZLO TÚ</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto">CONTACTO</Link>
          </li>
          <li className="nav-item">
            <Link to="">- Vanesa Vasquez -</Link>
          </li>
        </ul>
        

    </div>
    );
}
export default Nav;