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
                        <img src="img/bototipicu 1.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bototipicu 2.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bototipicu 3.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bototipicu 4.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bototipicu 5.png" className="d-block w-100" alt="..."/>
                        </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="container">
          <div className="row skill">
            <h3 className="titulo3"> Programas - Framework - Tecnologias y CMR que más uso</h3><br/>
              <div className="col">
                <div className="thumbnail">            
                    <img clasName="" src="img/illustrator.png" alt="Illustrator" width="50%" />
                    <div className="caption">
                      <p className="nombreskill">Illustrator</p>
                    </div>            
                </div>
              </div>

              <div className="col">
                <div className="thumbnail">            
                    <img className="" src="img/bootstrap.png" alt="Bootstrap" width="50%"/>
                    <div className="caption">
                      <p className="nombreskill">Bootstrap</p>
                    </div>            
                </div>
              </div>

              <div className="col">
                <div className="thumbnail">            
                    <img className="" src="img/html-5.png" alt="HTML 5" width="50%" />
                    <div className="caption">
                      <p className="nombreskill">HTML5</p>
                    </div>            
                </div>
              </div>

              <div className="col">
                <div className="thumbnail">            
                    <img className="" src="img/css-3.png" alt="CSS3" width="50%" />
                    <div className="caption">
                      <p className="nombreskill">CSS3</p>
                    </div>            
                </div>
              </div>

              <div className="col">
                <div className="thumbnail">            
                    <img className="" src="img/javascript.png" alt="JavaScript" width="50%"/>
                    <div className="caption">
                      <p className="nombreskill">JS</p>
                    </div>            
                </div>
              </div>

              <div className="col">
                <div className="thumbnail">            
                    <img className="img-responsive" src="img/wordpress.png" alt="Wordpress" width="50%"/>
                    <div className="caption">
                      <p className="nombreskill">Wordpress</p>
                    </div>            
                </div>
              </div>

            </div>
          </div>
          
        
      </main>
    );
}
export default HomePage;