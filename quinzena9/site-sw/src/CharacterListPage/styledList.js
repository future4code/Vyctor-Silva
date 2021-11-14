import styled from "styled-components";


export const Container = styled.div` 
  display: block;
`;


export const ListaPersonagem = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  width: 300px;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  } 
`

export const Nome = styled.p`
  margin-left: 10px;
`
