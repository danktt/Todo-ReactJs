import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import Form from "./components/Form";
import usePersistedState from "./hooks/usePersistedState";
import GlobalStyles from './styles/global'

import light from "./themes/light";
import dark from "./themes/dark";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";


function App() {
  const [ input, setInput ] = useState("FALOU CAPIVARA")
  const [ theme, setTheme ] = usePersistedState("Capivara",light) //Aqui só guarda o estado inicial


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
      />
      < GlobalStyles/>
    </ThemeProvider>
  
  );
}

export default App;
