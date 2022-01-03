import styled from "styled-components";


export const FormRoot = styled.form`
  display: flex;
  justify-content: center;
  max-width: 62.5rem;
  margin: auto;
  /* background: yellow; */
  margin-top: -8rem;
  margin-bottom: 3rem;

  input {
    height : 3rem;
    border: none; 
    border-radius: .3rem;
    background: ${props => props.theme.colors.secondary};
    width: 700px;
    color: ${props => props.theme.colors.text};
    font-size: 1.4rem;
  }

  button {
    height: 3rem;
    margin-left: 2rem;
    width: 4rem;
    border: none;
    border-radius: .3rem;
    font-size: 1.4rem;
    cursor: pointer;

    background: ${props => props.theme.colors.backgroundButton};;
    
    transition: .2s;

        &:hover{
          filter: brightness(.8)
        }
  }


`