import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleInputCategorias(e){
    if(e.key === "Enter")
    console.log("Adicionou categoria")
  }
  
  render() {
    return (
      <section  className="lista__sessao">
        <ul className="lista__categorias">
          {this.props.categoria.map((categoria,index) =>{
            return <li key={index} className="lista__itens">{categoria}</li>

          })}
        </ul>

        <input type="text" onKeyUp={this._handleInputCategorias.bind(this)}/>
      </section>
    );
  }
}

export default ListaDeCategorias;
