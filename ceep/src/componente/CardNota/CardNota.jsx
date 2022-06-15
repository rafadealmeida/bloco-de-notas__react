import React, { Component } from 'react';
import "./estilo.css"

class CardNota extends Component {
    render() {
        return (<section>
            <header>
                <h3 className="card__titulo">Título</h3>
            </header>
            <p>Escreva sua nota</p>
        </section>);
    }
}

export default CardNota;