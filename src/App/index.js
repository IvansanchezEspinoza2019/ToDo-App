import react, {useState} from 'react'
import './AppUI'
import { AppUI } from './AppUI';

// hardcoded todo's list
// const defaultTODOs = [
//   {text: "Primera item", completed: false},
//   {text: "Segundo item ddddddddddddddddddddddddsdsdsdhh", completed: false},
//   {text: "Tercer item", completed: true},
// ]

function App() {

  const lolcalStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if(!lolcalStorageTodos){
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos=[]
  } else{
    parsedTodos=JSON.parse(lolcalStorageTodos)
  }

  // application states
  const [todos, setTodos] = useState(parsedTodos)
  const [search, setSearch] = useState('');

  // total todos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // return the searched todos
  const lowerSearch = search.toLowerCase();
  const searchedTodos  = search.length == 0 ? todos:todos.filter(todo=>{
    return todo.text.toLowerCase().includes(lowerSearch)
  })

  const saveTodos = (newTodos)=> {
    const strTodos = JSON.stringify(newTodos)
    localStorage.setItem("TODOS_V1", strTodos)
    setTodos(newTodos)
  }

  // complete todo
  const completeTodo = (text) =>{
    const index = todos.findIndex(todo => todo.text===text);
    const newtodos = [...todos]
    newtodos[index].completed=true
    saveTodos(newtodos)
  }

  // delete todo
  const deleteTodo = (text) =>{
    const index = todos.findIndex(todo => todo.text===text);
    const newtodos = [...todos]
    newtodos.splice(index,1)
    saveTodos(newtodos)
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
