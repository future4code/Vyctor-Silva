import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { ListaPersonagem, Container, Nome } from "./styledList";






function CharacterListPage (props) {

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacterList()
  }, [])


  const getCharacterList = () => {
    axios.get(`${BASE_URL}people`)
    .then((resposta) => {
        setCharacterList(resposta.data.results)
     })
    .catch((erro) => {
        alert("Algo deu errado")
     })    
  }

  console.log(characterList)




 return(
    
  
    <Container>
          
            <h1>Lista de Personagens</h1>  
              {characterList.map((personagem) => {
                return (
                    <ListaPersonagem key={personagem.url} onClick={() => props.goToDetailsPage(personagem.url)}>
                        <Nome> {personagem.name}</Nome>
                    </ListaPersonagem>
                  )
              })} 
        
            
         
    </Container> 
 )

}

export default CharacterListPage