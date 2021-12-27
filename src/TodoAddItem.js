import React from "react";
import './TodoButton.css';

function TodoAddItem(){

    const onCLickButton = (msg) => {
        alert(msg)
    }
    return(
        <button className="TodoAddItem"
            onClick={()=> onCLickButton("Hola")}
        >+</button>
    )
}

export {TodoAddItem}