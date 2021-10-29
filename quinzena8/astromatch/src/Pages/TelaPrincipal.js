import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Conteiner, Imagem, CardMacth, Titulo, DivTitulo } from "./styled"

 

const TelaPrincipal = () => {
   const [perfilParaMatches, setPerfilParaMatches] = useState({}) 
    

   useEffect(() => {
      pegarPerfil()
   }, [])

    const pegarPerfil = () => {
      const url ='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vyctor-silva-banu/person'
      
      axios.get(url)
      .then((resposta) => {
         setPerfilParaMatches(resposta.data.profile)
      })
      .catch((erro) => {
         console.log(erro)
      })
    }
    

  
   const escolhaButton = (value) => {
      if(value) {
         return "true"
      } else {
         return "false"
      }
   }   

   
   const escolhaSobrePerfil = () => {
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vyctor-silva-banu/choose-person" 
      const body= {
         id: (perfilParaMatches.id),
	      choice: {escolhaButton}
      }

      axios.post(url, body, {
         header: (
            "Content-Type: application/json"
         ),
      })
      .then((resposta) => {
         // console.log(resposta)
         pegarPerfil()
      })
      .catch((erro) => {
         console.log(erro)
      })
   }  
    

   return(
      <Conteiner>
      {!perfilParaMatches ? <div>Acabaram os perfis! Aperte o botão de limpar lista de matches.</div> :
         <CardMacth>
            <DivTitulo>
               <Titulo> AstroMatch </Titulo>  <img src="https://img.icons8.com/ultraviolet/40/000000/matches.png" alt="Icone" />
            </DivTitulo>
            <Imagem src={perfilParaMatches.photo} alt= "Imagem dos Perfis para Match" ></Imagem>
            <h2>{perfilParaMatches.name}, {perfilParaMatches.age}</h2>
            <p>{perfilParaMatches.bio}</p>
            <div>
              <button onClick={escolhaSobrePerfil}  value={()=> escolhaButton(false)}>❌</button>
              <button onClick={escolhaSobrePerfil} value={()=> escolhaButton(true)}>💚</button>
           </div>
         </CardMacth>
      }
    </Conteiner>
   )
}

export default TelaPrincipal;