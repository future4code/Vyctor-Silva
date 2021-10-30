import axios from "axios";
import React, { useState, useEffect } from "react";
import { ListItem, PerfilContainer, ContainerMatch, Botao, ImagemMatche, Titulo, LetraNome } from "./styled"





const TelaMatchs = () => {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
       pessoasMatches()        
    }, [])

    const pessoasMatches = () => {
       const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vyctor-silva-banu/matches"

       axios.get(url )
       .then((resposta) => {
          setMatches(resposta.data.matches)
       })
       .catch((erro) => {
           console.log (erro)
       })
    }


    const limparTelaDeMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vyctor-silva-banu/clear"
    
        axios.put(url, {
          Headers: (
            "Content-Type: application/json"
           ),
        })
        .then((resposta) => {
            setMatches([])
        })
        .catch((erro) => {
           console.log(erro)
        })
    
      }

    return(
        
        <ContainerMatch>
        
            <PerfilContainer>
                <Titulo> Lista de Matches </Titulo>
                {matches.map((match) => {
                    return (
                        <ListItem>
                            <ImagemMatche src={match.photo} alt="Imagem do perfil que deu match"/>
                            <LetraNome>{match.name}</LetraNome>
                        </ListItem>
                        )
                    })}
                    <Botao onClick= {() => limparTelaDeMatches()} > Limpar Matches</Botao>
            </PerfilContainer>
            
        </ContainerMatch>
        
    )

}

export default TelaMatchs;

