import styled from "styled-components";


export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  margin: auto;
  max-width: 1000px;
  align-items: center;
  background: #333;

  border-radius: .3rem .3rem 0 0; 
  
  margin-top: 2rem;
`
export const Li = styled.li`
  list-style-type: none;
  height: 4.5rem;

  display: flex;
  align-items: center;
  
  `
export const Input = styled.input` 
  width: 796px;
  height: 3rem; 
  background: aqua;
  border: none;
  font-size: 1.4rem;

  border-bottom: 1px solid #333;
  border-radius: .3rem;

  margin-top: 0.2rem;
  
`

export const ButtonComplete = styled.button`
  height:2.5rem;
  width:2.5rem;
  border: none;
  margin-left: .5rem;
  border-radius: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EE6055;
  cursor: pointer;
`  

export const ButtonEdit = styled.button`
  height:2.5rem;
  width:2.5rem;
  border: none;
  margin-left: .5rem;
  border-radius: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFD97D;
  cursor: pointer;

`
export const ButtonDelete = styled.button`
  height:2.5rem;
  width:2.5rem;
  border: none;
  margin-left: .5rem;
  border-radius: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #60D394;
  cursor: pointer;




`