import React, {useContext, useState} from 'react'
import { TodoContext } from '../TodoContext'
import "./form.css" 

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = useState("")
    
    // contexto
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }   
    const onSubmit = (event) => {
        event.preventDefault()
        if(newTodoValue !== ""){
            addTodo(newTodoValue)
            setOpenModal(false)
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Add a new Todo...</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='ej. make a shopping list item'/>
    
        <div className='TodoForm-buttonContainer'>
            <button 
                className='TodoForm-button TodoForm-button-cancel'
                onClick={onCancel}
                type='button'
            >
               Cancelar 
            </button>
            <button
                className='TodoForm-button TodoForm-button-add'
                type="submit"
            >
                Añadir
            </button>
        </div>
        
        
        
        </form>
    )
}

export {TodoForm}