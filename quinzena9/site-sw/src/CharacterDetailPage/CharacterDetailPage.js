import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



function CharacterDetailPage (props) {
  const [details, setDetails] = useState([]);
  const [planet, setPlanet]  = useState([]);
  
 useEffect(() => {
  getCharacterDetails()
}, [])


 useEffect(() => {
   getPlanetDetails()
 }, [details])

 
  
  const getCharacterDetails = () => {
    axios.get(props.url)
    .then((resposta) => {
      setDetails(resposta.data)
     })
    .catch((erro) => {
      alert("Algo deu errado")
     })    
  }
  

  const getPlanetDetails = async () => {
    try {
        const response = await axios.get(details.homeworld)
        
        setPlanet(response.data)
      } catch(error) {
        console.log(error)
      }
  }
    


 return(
     <div>
        <h1>Detalhes do Personagem</h1>
        {details.name && planet.name ?
          (<div>
            <p>Nome: {details.name}</p>
            <p>Planeta de origem: {planet.name}</p>
          </div>)
          : 
          <p>Carregando...</p>
        }
        <button onClick={()=> props.goToListPage()}>Voltar para lista de personagens</button>
     </div>
 )

}

export default CharacterDetailPage