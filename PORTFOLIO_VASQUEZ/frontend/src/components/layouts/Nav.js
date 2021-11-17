import React from 'react';
const Nav = (props) =>{
    return(
        <div class="container">
          
            <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">VER MÁS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="hazlo-tu-blog.html">HAZLO TÚ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contacto.html">CONTACTO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">- Vanesa Vasquez -</a>
            </li>
            </ul>

        </div>
    );
}
export default Nav;