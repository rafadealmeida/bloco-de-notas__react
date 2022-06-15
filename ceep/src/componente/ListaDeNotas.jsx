import React from "react";
import CardNota from "../componente/CardNota"
export class ListaDeNotas extends React.Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map(categoria => {
                    return (
                        <li>
                            <span>{categoria}</span>
                            <CardNota />
                        </li>
                    )
                })
                }
            </ul>
        )
    }
}