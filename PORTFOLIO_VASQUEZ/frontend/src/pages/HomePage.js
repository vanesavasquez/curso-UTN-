import React from 'react';
import '../styles/components/pages/HomePage.css'
const HomePage = (props)=>{
    return(
        <main>
        
        <div className="container-fluid segundo_contenedor ">
          <h2 className="texto">Diseñadora WEB</h2>
        </div>
        
        <div className="container tercer_contenedor">
          
          <div className="row contenedor_proyecto ">
              <div className="col-5 descripcion">
                <h3>BOTOTÍ PICÚ - <span className="destacar">WEB</span> -</h3>  
                <p>Wordpress - CSS - HTML </p>  
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>         

              </div>
              <div className="col-7">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                        <img src="img/vertico 1.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/vertico 2.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/vertico 3.png" className="d-block w-100" alt="..."/>
                        </div>
                  </div>
                </div>
              </div>
              
            </div>

          

          
        </div>
        
      </main>
    );
}
export default HomePage;