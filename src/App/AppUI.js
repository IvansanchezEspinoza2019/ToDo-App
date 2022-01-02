import react, {useContext} from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem'
import { TodoAddItem } from '../TodoAddItem';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI(){
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
    openModal,
  setOpenModal} = useContext(TodoContext)
    return (
<react.Fragment>
      {/*Contador de tareas completadas de la lista de TODOs*/ }
      <TodoCounter/>


      {/*Barra de busqueda*/}
      <TodoSearch/>

      {/*Lista de Todos*/}

          <TodoList>
          {error  && <p>Error.. {error}</p>}
          {loading  && <p>Loading...</p>}
          {!loading  && !searchedTodos.length && <p>Create your first ToDo!</p>}
          
  
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>{deleteTodo(todo.text)}}
              completed={todo.completed}/>
            
            ))}
        </TodoList>
    
            {openModal && (
               <Modal>
                 <TodoForm></TodoForm>
             </Modal>
            )}
      {/*Agrega una nueva Todo*/}
      <TodoAddItem
        setOpenModal={setOpenModal}
      />

    </react.Fragment>
    )
}

export {AppUI}