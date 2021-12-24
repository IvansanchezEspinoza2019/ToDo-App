import react from 'react'
import {TodoCounter} from './TodoCounter';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem'
import { TodoAddItem } from './TodoAddItem';
import { TodoSearch } from './TodoSearch';

const TODOs = [
  {text: "Primera item", completed: false},
  {text: "Segundo item", completed: false},
  {text: "Tercer item", completed: false},
]

function App() {
  return (
    <react.Fragment>
      {/*Contador de tareas completadas de la lista de TODOs*/ }
      {<TodoCounter/>}


      {/*Barra de busqueda*/}
      <TodoSearch/>

      {/*Lista de Todos*/}
      <TodoList>
          {TODOs.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))}
      </TodoList>

      {/*Agrega una nueva Todo*/}
      <TodoAddItem/>

    </react.Fragment>
  );
}

export default App;
