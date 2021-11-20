import styled from "styled-components";


export const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  height: 400px;

  div {
    max-width: 1000px;
    // background: aqua;
    margin: auto;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 3rem;
      text-transform: uppercase;
    }

    span {
      font-size: 2rem;
      cursor: pointer;
      transition: 5s;
    }
  }

`
