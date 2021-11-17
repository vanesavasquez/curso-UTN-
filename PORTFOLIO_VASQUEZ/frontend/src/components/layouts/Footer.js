import React from "react";

const Footer = (props) => {
    return(
        <footer class="mifooter" >
        <div class="contenedor-footer">
          
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Linkedin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bheances</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Workanna</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Telegram</a>
            </li>
            
          </ul>
          <p>- © Vanesa Vasquez 2021 -</p>
        </div>
        <div>
          <a href="#"><i  class="bi bi-facebook"></i></a>
          <a href="#"><i  class="bi bi-instagram"></i></a>
        </div>
      </footer>
    );
}
export default Footer;