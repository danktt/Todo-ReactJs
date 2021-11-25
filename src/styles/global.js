import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background } ;
    color: ${props => props.theme.colors.text } ;
    font-family: sans-serif;
  }


  .Section{
    width: 1200px;
    height: 530px;
    background: #333;
    margin: 0 auto;
    /* overflow: auto; */
    /* overflow-y: hidden; */
    
    overflow: auto;
    
    
    
  }



  .Selected{
    display: flex;
    justify-content: space-between;
    width:1200px;
    background: #333;
    margin: auto;
    height: 3rem;
    
    .SelectedItens{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
    }
  
    .SelectedButtons{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 200px;


      button{
        border: none;
        cursor: pointer;
      }
    }
  
  }



`