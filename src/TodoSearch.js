import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    return (
        <div className="SearchConteiner">
                <input className="TodoSearch" placeholder="Busca un ToDo..."></input>
        </div>
    )
}

export {TodoSearch}