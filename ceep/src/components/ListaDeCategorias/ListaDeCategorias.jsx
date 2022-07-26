import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

  _handleInputCategorias(e){
    if(e.key == "Enter"){
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
      
    };
  }
  
  render() {
    return (
      <section  className="lista__sessao">
        <ul className="lista__categorias">
          {this.state.categorias.map((categoria,index) =>{
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
