import React from "react";
import { ListaContainer, ListaTarefasCompletas } from "./styled";


function ListaTarefasConcluidas(props) {
    const completa = props?.completa;
    return(
        <ListaContainer>
<ul>
    {completa.map((TarefaCompleta) => {
        return( <ListaTarefasCompletas key={TarefaCompleta}>{TarefaCompleta}</ListaTarefasCompletas>
    )})}
</ul>
        </ListaContainer>
    )
};

export default ListaTarefasConcluidas