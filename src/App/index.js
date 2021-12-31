  import react, {useState, useEffect} from 'react'
  import './AppUI'
  import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

  // hardcoded todo's list
  // const defaultTODOs = [
  //   {text: "Primera item", completed: false},
  //   {text: "Segundo item ddddddddddddddddddddddddsdsdsdhh", completed: false},
  //   {text: "Tercer item", completed: true},
  // ]



  function App() {
    return (
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
        
        
        );
  }

  export default App;
