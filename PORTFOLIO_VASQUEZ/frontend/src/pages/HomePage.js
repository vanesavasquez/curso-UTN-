import React from "react";
const HomePage = (props)=>{
    return(
        <main>
        
        <div class="container-fluid segundo_contenedor ">
          <h2>Hola soy <span class="gradient">Vanesa Vasquez </span> y hago <span>WEBS</span></h2><i class="bi bi-arrow-down"></i>
        </div>

        <div class="container tercer_contenedor">
          
          <div class="row contenedor_proyecto ">
              <div class="col-5 descripcion">
                <h3>COLABORACIÓN - <span class="destacar">VERTICO</span> -</h3>
                  
              </div>
              <div class="col-7">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                      <img src="img/vertico 1.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="img/vertico 2.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="img/vertico 3.png" class="d-block w-100" alt="..."/>
                    </div>
                    
                  </div>
                </div>
            </div>
              
          </div>

          <div class="row contenedor_proyecto ">
            <div class="col-7">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src="img/DIEM-1 - copia.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/DIEM- 2.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/DIEM - 3.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/DIEM- 5 - copia.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/DIEM- 4 - copia.png" class="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
                
            </div>
            <div class="col-5">
              <h3 id="diem">WP - <span class="destacar" >DIEM</span> -</h3>
            </div>
          </div>

          <div class="row contenedor_proyecto ">
            <div class="col-5 descripcion">
              <h3>COLABORACIÓN - <br/><span class="destacar bototi">BOTOTÍ PICÚ</span> -</h3>
               
            </div>
            <div class="col-7">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src="img/bototipicu 1.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/bototipicu 2.png" class="d-block w-100" alt="..."/>
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