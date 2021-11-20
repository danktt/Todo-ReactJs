import { Header } from "./styles";

function Home(props) {
  return (
    <>
      <Header>
        <div>
          <h1>todo</h1>
          <span onClick={props.toggleTheme}> {props.icon} </span>
        </div>
      </Header>

      
    </>
  );
}

export default Home;
