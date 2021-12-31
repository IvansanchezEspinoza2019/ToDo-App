import React from "react";
import './TodoButton.css';

function TodoAddItem(props){

    const onCLickButton = () => {
        props.setOpenModal(prevStat => !prevStat)
    }
    return(
        <button className="TodoAddItem"
            onClick={()=> onCLickButton()}
        >+</button>
    )
}

export {TodoAddItem}