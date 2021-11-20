import { FormRoot } from "./styles";

function Form(props) {

  console.log(props)
  return (
    <FormRoot >
      <input type="text" placeholder="  What do you want to do?" />

      <button type="submit"> Add</button>

      
    </FormRoot>
  );
}

export default Form;
