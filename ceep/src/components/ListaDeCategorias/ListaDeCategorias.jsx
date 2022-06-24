import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  render() {
    return (
      <section  className="lista__sessao">
        <ul className="lista__categorias">
          <li className="lista__itens">Categorias</li>
          <li className="lista__itens">Categorias</li>
          <li className="lista__itens">Categorias</li>
          <li className="lista__itens">Categorias</li>
        </ul>

        <input type="text" />
      </section>
    );
  }
}

export default ListaDeCategorias;
