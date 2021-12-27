import React, {useState} from "react";
import './TodoSearch.css'

function TodoSearch({ search, setSearch}){

    const onSearchValueChange = (event)=>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <div className="SearchConteiner">
                <input 
                    className="TodoSearch" 
                    placeholder="Busca un ToDo..."
                    value={search}
                    onChange={onSearchValueChange}
                ></input>
        </div>
    )
}

export {TodoSearch}