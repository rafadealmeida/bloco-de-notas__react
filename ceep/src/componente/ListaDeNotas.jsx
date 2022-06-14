import React from "react";
import CardNota from "../componente/CardNota"
export class ListaDeNotas extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota />
                </li>
            </ul>
        )
    }
}