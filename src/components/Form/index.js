import { FormRoot } from "./styles";
import { v4 as uuidv4} from "uuid"
import { useEffect } from "react";


function Form({input, setInput, todos, setTodos, editTodo, setEditTodo}) {

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      return todo.id === id ?  {title, id , completed } : todo
    })
    setTodos(newTodo)
    setEditTodo("")
  }


  useEffect(() => {
    editTodo ? setInput(editTodo.title) : setInput("")  
  }, [setInput, editTodo])



  const onInputChange = (event) => {
    setInput(event.target.value); 
   
  
  }

  

  // const onClick = (setInput) => { // CONTINUA AQUI 
  //   if(input) 
  // }


  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTodo){
      setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
      setInput("") 
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }


  console.log(onInputChange)

  return (
    <FormRoot onSubmit={onFormSubmit}  >
      <input 
        type="text" 
        placeholder="  What do you want to do?"
        value={input}
        require
        onChange={onInputChange}
        />

      <button type="submit" > {editTodo ? "Ok" : "Add"}</button>

      
    </FormRoot>
  );
}

export default Form;
