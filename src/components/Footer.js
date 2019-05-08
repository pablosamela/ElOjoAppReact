import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark">
        <div className="container text-center">
          <div className="row">
              <div className="col my-2 text-white">
              © 2004-2019 El Ojo Digital
              <br />
              </div>
              <div className="col my-2">
              <a href="/contenido/sobre-el-ojo-digital" className="text-white">Contáctenos</a>  
              </div>
              <div className="col my-2">
              <a href="/contenido/sobre-el-ojo-digital" className="text-white"> Publicidad</a>
              </div>
          </div>
          <div className="row"> 
              <div className="col my-2">
              <a href="/contenido/sobre-el-ojo-digital" className="text-white">Nosotros</a>
              </div>
              <div className="col my-2">
              <a href="/condiciones-de-uso" className="text-white">Términos y condiciones</a>
              </div>
          </div>
          <div className="row">      
            <div className="col my-2 mx-auto">
                <a href="http://twitter.com/elojodigital" className="d-inline-block m-2 sp tw" title="Seguinos en twitter">&nbsp;</a>
                <a href="http://www.facebook.com/elojodigital" className="d-inline-block m-2 sp fb" title="Seguinos en Facebook">&nbsp;</a>
                <a href="/seccion/all/rss" className="d-inline-block m-2 sp rss" title="Canal RSS">&nbsp;</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer;