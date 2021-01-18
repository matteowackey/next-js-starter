import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 h1 {
     margin:0;
   font-size: 4rem;
 }
`
const Container = styled.div`
  text-align: center;
  background-color: red;
`

export { GlobalStyle, Container }
