import react, {useState} from 'react'
import './AppUI'
import { AppUI } from './AppUI';

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

  // complete todo
  const completeTodo = (text) =>{
    const index = todos.findIndex(todo => todo.text===text);
    const newtodos = [...todos]
    newtodos[index].completed=true
    setTodos(newtodos)
  }

  // delete todo
  const deleteTodo = (text) =>{
    const index = todos.findIndex(todo => todo.text===text);
    const newtodos = [...todos]
    newtodos.splice(index,1)
    setTodos(newtodos)
  }

  return (
      <AppUI
        search={search}
        setSearch={setSearch}
        completedTodos={completedTodos}
        totalTodos= {totalTodos}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}

      />
      
      );
}

export default App;
