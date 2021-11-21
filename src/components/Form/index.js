import { FormRoot } from "./styles";
import { v4 as uuidv4} from "uuid"


function Form({input, setInput, todos, setTodos}) {

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
    setInput("")
  }




  return (
    <FormRoot onSubmit={onFormSubmit} >
      <input 
        type="text" 
        placeholder="  What do you want to do?"
        value={input}
        require
        onChange={onInputChange}
        />

      <button type="submit"> Add</button>

      
    </FormRoot>
  );
}

export default Form;
