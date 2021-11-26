import React from 'react';
import { isValidElement } from 'react';
const Footer = (props)=>{
    return(
        <footer className="mifooter" >
        <div className="contenedor-footer">
          
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Linkedin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bheances</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Workanna</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Telegram</a>
            </li>
            
          </ul>
          <p>- © Vanesa Vasquez 2021 -</p>
        </div>
        <div>
          <a href="#"><i  className="bi bi-facebook"></i></a>
          <a href="#"><i  className="bi bi-instagram"></i></a>
        </div>
      </footer>
    );
}
export default Footer;