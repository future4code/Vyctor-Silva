import axios from "axios";
import React, { useState} from "react";
import styled from "styled-components";



const ContainerMatch = styled.div`
    display: flex;
    justify-content: center;
    height: 80vh;
`;

const PerfilContainer = styled.div`
    border: 1px solid black;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    
`;

const ListItem = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    width: 80%;
`;



const TelaMatchs = () => {

    const [matches, setMatches] = useState([ 
    {name: "Maria", image: "https://picsum.photos/50/50?=1" },
    {name: "João", image: "https://picsum.photos/50/50?=1" }
]);

    // const pessoasMatches = () => {
    //    const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"

    //    axios.get(url )
    //    .then((resposta) => {
    //       setMatches(resposta.data.matches)
    //    })
    //    .catch((erro) => {
    //        console.log (erro)
    //    })
    // }


    return(
        
        <ContainerMatch>
            <PerfilContainer>
                {matches.map((match) => {
                    return (
                        <ListItem>
                            <img src={match.image}/>
                            <h2>{match.name}</h2>
                        </ListItem>
                        )
                    })}
            </PerfilContainer>
        </ContainerMatch>
        
    )

}

export default TelaMatchs;

