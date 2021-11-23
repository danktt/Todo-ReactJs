import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import Form from "./components/Form";
import usePersistedState from "./hooks/usePersistedState";
import GlobalStyles from './styles/global'

import light from "./themes/light";
import dark from "./themes/dark";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [ input, setInput ] = useState("")
  const [ todos, setTodos ] = useState(initialState) // state das divs que iram aparecer na tela 
  const [ editTodo, setEditTodo] = useState(null)

  const [ theme, setTheme ] = usePersistedState("Capivara",light) //Aqui só guarda o estado inicial


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);



  // Function de Troca
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  const toggleIcon = theme.title === "light" ? <BsFillMoonFill /> : <BsFillSunFill />

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

      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </ThemeProvider>
  
  );
}

export default App;
