import React, {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error
      } = useLocalStorage("TODOS_V1", []);
  
      // application states
      const [search, setSearch] = useState('');
      const [openModal, setOpenModal] = useState(false)

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
        saveTodos(newtodos)
      }

      // complete todo
      const addTodo = (todoTxt) =>{
        const newtodos = [...todos]
        newtodos.push({
          completed: false,
          text: todoTxt
        })
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
        <TodoContext.Provider value={{
            loading,
            error,
            search,
            setSearch,
            completedTodos,
            addTodo,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal

        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}