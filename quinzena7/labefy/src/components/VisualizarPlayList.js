import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardListaPlayList = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  width: 20%;
  display: flex;
  justify-content: space-between;
`



export default class VisualizarPlayList extends React.Component {
    
    state= {
       todasPlayLists: [],
    }



    componentDidMount (){
        this.pegarPlayList()
    } 
    
pegarPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get (url,{
        headers: {
            Authorization: "vyctor-pierre-banu"
        }
    })
    .then((resposta) => {
       this.setState({todasPlayLists: resposta.data.result.list})
    })
    .catch((erro) => {
       alert("Algo deu errado!")
    })
}



deletarPlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
        headers: {
            Authorization: "vyctor-pierre-banu"
        }
    })
    .then((resposta) => {
        alert("PlayList deletada com sucesso.")
        this.pegarPlayList()
    })
    .catch((erro) => {  
        alert("Houve algum erro!")
    })
}


   render () {
    console.log(this.state.todasPlayLists)  
       const listaAllPlayList = this.state.todasPlayLists.map((playlista) => {
        return <CardListaPlayList key= {playlista.id}> 
                    {playlista.name} 
                    <button onClick= {() => this.deletarPlayList(playlista.id)}>X</button>
                </CardListaPlayList>
       }) 
       
       
       
       return (
            <div> 
                <h2>PlayList Criadas:</h2>
                {listaAllPlayList}
            </div>   
       )
   }
}