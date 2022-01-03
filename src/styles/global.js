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
    background: ${props => props.theme.colors.backgroundStrong };
    margin: 0 auto;
    
    
    overflow: auto;
    border-radius: .3rem .3rem 0 0 ;
  
    border: .1rem ;
    
  }



  .Selected{
    display: flex;
    justify-content: space-between;
    width:1200px;
    background: #333;
    margin: auto;
    height: 3rem;

    border-radius: 0 0 .3rem .3rem ;
    background: ${props => props.theme.colors.backgroundStrong };

    
    .SelectedItens{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
      color: ${props => props.theme.colors.text }
    }
  
    .SelectedButtons{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      gap: 1rem;

      button{
        border: none;
        cursor: pointer;
        height: 2rem;
        width: 34%;
        margin-left: -3rem;
        background: ${props => props.theme.colors.backgroundButton };

        border-radius: .3rem;
        
        transition: .2s;

        &:hover{
          filter: brightness(.8)
        }

      }
    }
  
  }



`