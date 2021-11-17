import React from "react";

const ContactoPage = (props) =>{
    return(
        <main>
        
        <div class="container-fluid segundo_contenedor">
          <h2>Di <span class="gradient">Hola!</span></h2>
        </div>

        <div class="container tercer_contenedor">
            <div class="row">
                <div class="col-5">
                    <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Dejame tu correo</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">Nunca compartiré tu correo electrónico con nadie más.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">¿Qué necesitas?</label>
                          <textarea class="form-control" aria-label="With textarea" rows="5"></textarea>
                        </div>
                        
                        <button type="submit" class="btn  botonenviar">OK</button>
                      </form>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <h3>Trabajo aquí</h3> 
                    <div class="caja_iconos">
                        <i class="bi bi-linkedin"></i> 
                        <i class="bi bi-record-circle-fill"></i>
                        <i class="bi bi-telegram"></i>
                    </div>

                   
                </div>

            </div>
        </div>
        
      </main>
    );
}
export default ContactoPage;