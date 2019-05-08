import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {

  constructor (props){
    super(props);
    this.state = {
      principal: [],
      secondary: []
    }
    this.loadPrincipal = this.loadPrincipal.bind(this);
    this.loadSecondary = this.loadSecondary.bind(this);

  }

  loadPrincipal() {
    axios.get('http://www.elojodigital.com/json/nodequeue/principal')
    .then(
      (result) => {
        console.log(result);
        this.setState({
          principal: result.data.nodes
        });
      },   
      (error) => {
        console.log(error);
      }
    );
  }

  loadSecondary() {
    axios.get('http://www.elojodigital.com/json/nodequeue/secondary')
    .then(
      (result) => {
        console.log(result);
        this.setState({
          secondary: result.data.nodes
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  componentDidMount() {
    this.loadPrincipal();   
    this.loadSecondary();
  }
  render() {

    const renderPrincipal =  this.state.principal.map(
      (nodes,i) => (
        <article className="row my-3 py-3 border-bottom" key={i}>
          <div className="col">
            <small className="mb-2">
              { nodes.node.field_cintillo }: {nodes.node.field_volanta}
            </small><br />
            <img src={ nodes.node.field_foto.src} alt={ nodes.node.field_foto.alt} className="w-100 img-fluid border p-1 rounded" />
            <h1 className="my-3">
              <a href={ nodes.node.path } className="node">
                { nodes.node.title }
              </a>
            </h1>
            <p className="lead">
              { nodes.node.field_bajada }
            </p>
          </div>
        </article>
      )
    );

    const renderSecondary = this.state.secondary.map(
      (nodes,i) => (
        <article className="row my-3 py-3 border-bottom" key={i}>
          <div className="col">
            <small className="mb-2">
              { nodes.node.field_cintillo }: {nodes.node.field_volanta}
            </small><br />
            <img src={ nodes.node.field_foto.src} alt={ nodes.node.field_foto.alt} className="w-100 img-fluid border p-1 rounded" />
            <h5 className="my-3">
              <a href={ nodes.node.path } className="node">
                { nodes.node.title }
              </a>
            </h5>
            <p>
              { nodes.node.field_bajada }
            </p>
          </div>
        </article>
      )
    );
    
    return (
      <section className="m-3">
        <div>
          { renderPrincipal }
        </div>

        <div>
          { renderSecondary }
        </div>
      </section>
    );
  } 
}

export default Landing;


// http://www.elojodigital.com/json/nodequeue/principal
// http://www.elojodigital.com/json/nodequeue/secondary