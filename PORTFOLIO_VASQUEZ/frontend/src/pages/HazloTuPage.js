import React from 'react';
import '../styles/components/pages/HazloTuPage.css'
const HazloTuPage=(props)=>{
    return(
        <main>
        
        <div class="container-fluid segundo_contenedor">
          <h2>HAZ <span class="gradient">TU WEB!</span></h2>
        </div>

        <div className="container tercer_contenedor">
          <div class="row" >
            <h3>Mi gia para tener tu Tienda Online propia!</h3>
            <div className="col-4">
              <img src="img/hosting-dominio-blog.jpg" alt=""width="100%" height="100%"/>
            </div>
            <div className="col-4">
              <img src="img/tienda-pagos-y-envios-blog.jpg" alt=""width="100%" height="100%"/>
            </div>
            <div className="col-4">
              <img src="img/tienda-hacer-una-tienda-blog.jpg" alt=""width="100%" height="100%"/>
            </div>
          </div>
          
          <div className="row contenedorblog">
              <h3>Más para saber y hacer!</h3>
              <div className="row unarticulo">
                <div className="col-5">
                  <img src="img/hosting-dominio-blog.jpg" alt="hosting y dominio primeros pasos para mi web" width="100%" height="100%"/>
                </div>
                <div className="col-7">
                  <h3>Titulo</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a? Optio quos totam blanditiis ipsam inventore, vitae hic! Sequi sapiente id voluptate rem expedita vitae, exercitationem laboriosam tenetur maxime eos.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a? Optio quos totam blanditiis ipsam inventore, vitae hic! Sequi sapiente id voluptate rem expedita vitae, exercitationem laboriosam tenetur maxime eos.</p>
                </div>
              </div>
          </div>
            
          <div className="row contenedorblog" >
              <div className="row unarticulo">
                <div className="col-5">
                  <img src="img/hosting-dominio-blog.jpg" alt="hosting y dominio primeros pasos para mi web" width="100%" height="100%"/>
                </div>
                <div className="col-7">
                  <h3>Titulo</h3>                  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a? Optio quos totam blanditiis ipsam inventore, vitae hic! Sequi sapiente id voluptate rem expedita vitae, exercitationem laboriosam tenetur maxime eos.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a? Optio quos totam blanditiis ipsam inventore, vitae hic! Sequi sapiente id voluptate rem expedita vitae, exercitationem laboriosam tenetur maxime eos.</p>                                    
                </div>
              </div>  
          </div>
          
          <div className="row contenedorblog">
                <div className="row unarticulo">
                  <div claclassNamess="col-5">
                    <img src="img/hosting-dominio-blog.jpg" alt="hosting y dominio primeros pasos para mi web" width="100%" height="100%"/>  
                  </div>
                  <div className="col-7">
                    <h3>Titulo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a? Optio quos totam blanditiis ipsam inventore, vitae hic! Sequi sapiente id voluptate rem expedita vitae, exercitationem laboriosam tenetur maxime eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a? Optio quos totam blanditiis ipsam inventore, vitae hic! Sequi sapiente id voluptate rem expedita vitae, exercitationem laboriosam tenetur maxime eos.</p>
                  </div>
                </div>
          </div>
        </div>
        
      </main>
    );
}
export default HazloTuPage;