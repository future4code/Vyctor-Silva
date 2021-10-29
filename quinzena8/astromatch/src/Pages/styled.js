import styled from "styled-components";


//Styled Components da tela com Lista de Matches

export const ImagemMatche = styled.img`
    border-radius: 50%;
`

export const ContainerMatch = styled.div`
    display: flex;
    justify-content: center;
    height: 80vh;
`;


 export const PerfilContainer = styled.div`
    border: 1px solid black;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    
`;

export const ListItem = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 10%;
    padding: 10px;
    margin: 0.1em;
`;

export const Botao =styled.button`
    margin-top: auto;
    margin-right: -60%;
    background-image: url("https://fonts.google.com/icons?selected=Material%20Icons%3Asort%3A");
`


//Styled Components da Tela Principal

export const Conteiner = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   /* background-color: blue; */
`

export const Imagem = styled.img`
   height: 50vh;
   width: 400px;
`
export const CardMacth = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid black;
   width: 35vw;
   padding: 1%;
   background-color: #99c4e7;
` 

export const Titulo =styled.b`
   font-family: Cooper;
   color: black;
   font-size: 30px;

`
export const DivTitulo =styled.div`
   display: flex;
   justify-content: center;
`