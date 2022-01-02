import React, {useState, useContext} from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch(){
    const { search, setSearch} = useContext(TodoContext)

    const onSearchValueChange = (event)=>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <div className="SearchConteiner">
                <input 
                    className="TodoSearch" 
                    placeholder="Search ToDos..."
                    value={search}
                    onChange={onSearchValueChange}
                ></input>
        </div>
    )
}

export {TodoSearch}