import React, { Component } from 'react';
import {NavLink, BrowserRouter}  from 'react-router-dom';
import Section from './content/Section';

import axios from 'axios';

class Menu extends Component {
  
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sections: []
    }
    this.loadFromServer = this.loadFromServer.bind(this);
 
  }
  
  loadFromServer() {
    axios.get('http://www.elojodigital.com/all-sections-json')
    .then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          sections: result.data.sections
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'nav-item active' : 'nav-item';
  }

  componentDidMount() {
    this.loadFromServer();   
  }

  render() {
    const { error, isLoaded, sections } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <BrowserRouter>
        <nav className="navigation navbar navbar-black bg-black navbar-expand-lg">
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse mx-auto collapse" id="mainNavbar">
              <ul className="navbar-nav text-uppercase">
              <li className="nav-item active">
                <a href="/" className="nav-link" title="El Ojo digital">Inicio</a>
              </li>
                { sections.map(
                  (section,i) => (
                    <li className="nav-item" key={i}>
                      <NavLink to="/{{ section.section.id }}" component={Section}>
                        { section.section.name }
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
        </BrowserRouter>
      );
    }
  }
}

export default Menu;