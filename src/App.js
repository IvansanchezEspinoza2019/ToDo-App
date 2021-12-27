import react, {useState} from 'react'
import {TodoCounter} from './TodoCounter';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem'
import { TodoAddItem } from './TodoAddItem';
import { TodoSearch } from './TodoSearch';

// hardcoded todo's list
const defaultTODOs = [
  {text: "Primera item", completed: false},
  {text: "Segundo item ddddddddddddddddddddddddsdsdsdhh", completed: false},
  {text: "Tercer item", completed: true},
]

function App() {
  // application states
  const [todos, setTodos] = useState(defaultTODOs)
  const [search, setSearch] = useState('');

  // total todos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // return the searched todos
  const lowerSearch = search.toLowerCase();
  const searchedTodos  = search.length == 0 ? todos:todos.filter(todo=>{
    return todo.text.toLowerCase().includes(lowerSearch)
  })

  return (
    <react.Fragment>
      {/*Contador de tareas completadas de la lista de TODOs*/ }
      {<TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />}
  <input></input>

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
            completed={todo.completed}/>
          ))}
      </TodoList>

      {/*Agrega una nueva Todo*/}
      <TodoAddItem/>

    </react.Fragment>
  );
}

export default App;
