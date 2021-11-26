import React from 'react';
const ContactoPage = (props)=> {
    return(
        <main>
        
        <div className="container-fluid segundo_contenedor">
          <h2>Di <span className="gradient">Hola!</span></h2>
        </div>

        <div className="container tercer_contenedor">
            <div className="row">
                <div className="col-5">
                    <form>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Dejame tu correo</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" className="form-text">Nunca compartiré tu correo electrónico con nadie más.</div>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">¿Qué necesitas?</label>
                          <textarea className="form-control" aria-label="With textarea" rows="5"></textarea>
                        </div>
                        
                        <button type="submit" className="btn  botonenviar">OK</button>
                      </form>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                    <h3>Trabajo aquí</h3> 
                    <div className="caja_iconos">
                        <i className="bi bi-linkedin"></i> 
                        <i className="bi bi-record-circle-fill"></i>
                        <i className="bi bi-telegram"></i>
                    </div>

                   
                </div>

            </div>
        </div>
        
      </main>
    );
}
export default ContactoPage;