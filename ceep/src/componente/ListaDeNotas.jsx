import React from "react";
import CardNota from "./CardNota/CardNota"
export class ListaDeNotas extends React.Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
                    return (
                        <li key={index}>
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