import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global'

import Home from "./components/Home";
import Form from "./components/Form";
import usePersistedState from "./hooks/usePersistedState";

import light from "./themes/light";
import dark from "./themes/dark";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [ input, setInput ] = useState("") // Estado inicial o form
  const [ todos, setTodos ] = useState(initialState) // state das divs que iram aparecer na tela 
  const [ editTodo, setEditTodo] = useState(null)

  const [ theme, setTheme ] = usePersistedState("Capivara",light) //Aqui só guarda o estado inicial

  const [ status, setStatus ] = useState("All")

  const [ filteredTodos, setFilteredTodos ] = useState([])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    filterHandler();
  }, [todos,status])

  const filterHandler = () => {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'Active':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  
  }



  // Function de Troca
  // test line
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  const toggleIcon = theme.title === "light" ? <BsFillMoonFill /> : <BsFillSunFill />

  const couterTodos = todos.length;
  
  

  const statusHandler = (event) => {
    setStatus(event.target.value) 
  }

  
    return (
    <ThemeProvider theme={theme}>
      <Home toggleTheme={toggleTheme} icon={toggleIcon} />
      <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      < GlobalStyles/>

      <div className="Section">
         
            <TodoList 
              todos={todos} 
              setTodos={setTodos} 
              setEditTodo={setEditTodo}
              filteredTodos={filteredTodos}
              />

     
      </div>
      <div className="Selected">
        <div className="SelectedItens">
          <span>{couterTodos} itens na lista </span>
        </div>

        <div className="SelectedButtons">
          <button onClick={statusHandler} value="All" >All</button>
          <button onClick={statusHandler} value="Active">Active</button>
          <button onClick={statusHandler} value="Completed">Completed</button>
        </div>

      </div>
    </ThemeProvider>
  
  );
}

export default App;
