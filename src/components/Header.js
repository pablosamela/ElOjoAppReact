import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
            <a href="/" title="El Ojo Digital">
              <img src="/assets/img/logo.svg" alt="" />
            </a>
            <br />
          <small>Viernes, 22 de Febrero de 2019 - 13:58</small>
        </div>
        <Menu />
      </header>
    );
  }
}

export default Header;