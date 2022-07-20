import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleInputCategorias(e){
    console.log(e)
    if(e.key == "Enter"){

      console.log("Adicionou categoria");
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    };
  }
  
  render() {
    return (
      <section  className="lista__sessao">
        <ul className="lista__categorias">
          {this.props.categoria.map((categoria,index) =>{
            return <li key={index} className="lista__itens">{categoria}</li>

          })}
        </ul>

        <input type="text" 
        className="lista__categoria--input"
        placeholder="Adicionar Categoria"
        onKeyUp={this._handleInputCategorias.bind(this)}/>
      </section>
    );
  }
}

export default ListaDeCategorias;
