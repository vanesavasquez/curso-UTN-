import React from 'react';
const HomePage = (props)=>{
    return(
        <main>
        
        <div className="container-fluid segundo_contenedor ">
          <h2>Hola soy <span className="gradient">Vanesa Vasquez </span> y hago <span>WEBS</span></h2><i className="bi bi-arrow-down"></i>
        </div>

        <div className="container tercer_contenedor">
          
          <div className="row contenedor_proyecto ">
              <div className="col-5 descripcion">
                <h3>COLABORACIÓN - <span className="destacar">VERTICO</span> -</h3>             

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

          <div className="row contenedor_proyecto ">
                <div className="col-7">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                                <img src="img/DIEM-1 - copia.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="img/DIEM- 2.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="img/DIEM - 3.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="img/DIEM- 5 - copia.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="img/DIEM- 4 - copia.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                </div>
                    
                </div>
                <div className="col-5">
                    <h3 id="diem">WP - <span className="destacar" >DIEM</span> -</h3>
                </div>
          </div>

          <div className="row contenedor_proyecto ">
                <div className="col-5 descripcion">
                <h3>COLABORACIÓN - <br/><span className="destacar bototi">BOTOTÍ PICÚ</span> -</h3>
                
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
                        
                        </div>
                </div>
                </div>
            
            </div>
        </div>
        
      </main>
    );
}
export default HomePage;