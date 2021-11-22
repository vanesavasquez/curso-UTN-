import {Link} from 'react-router-dom';
const Nav = (props) =>{
    return(
        <div class="container">
          
            <ul class="nav justify-content-center">
            <li class="nav-item">
                <Link  to="/" > HOME</Link>
                
            </li>
            <li class="nav-item">
                <Link to="/Vermas"> Ver Mas</Link>
                
            </li>
            <li class="nav-item">
                <Link to="/Hazlotú">Hazlo Tu</Link>
                
            </li>
            <li class="nav-item">   
                <Link to="/Contacto">CONTACTO</Link>
                
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="" tabindex="-1" aria-disabled="true">- Vanesa Vasquez -</a>
            </li>
            </ul>

        </div>
    );
}
export default Nav;