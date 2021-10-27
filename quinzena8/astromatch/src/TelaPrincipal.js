import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Conteiner = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Imagem = styled.img`
   height: 50vh;
`
const CardMacth = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid black;
   width: 35vw;
   padding: 1%;
` 

function TelaPrincipal  () {
    
    return(
    <Conteiner>
      <CardMacth>
          <Imagem src="https://picsum.photos/500/500?=1" alt= "Imagem qualquer" ></Imagem>
          <h2>Vyctor</h2>
          <p>Oi! Eu sou a Vyctor. No futuro, aqui teremos dados que virão da API</p>
          <div>
            <button>❌</button>
            <button>💚</button>
          </div>
      </CardMacth>
      
    </Conteiner>
    )
}

export default TelaPrincipal;