import react from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem'
import { TodoAddItem } from '../TodoAddItem';
import { TodoSearch } from '../TodoSearch';

function AppUI({
        search,
        setSearch,
        completedTodos,
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo
}){
    return (
<react.Fragment>
      {/*Contador de tareas completadas de la lista de TODOs*/ }
      {<TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />}


      {/*Barra de busqueda*/}
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />

      {/*Lista de Todos*/}
      <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>{deleteTodo(todo.text)}}
            completed={todo.completed}/>
          
          ))}
      </TodoList>

      {/*Agrega una nueva Todo*/}
      <TodoAddItem/>

    </react.Fragment>
    )
}

export {AppUI}