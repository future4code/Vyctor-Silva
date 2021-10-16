import React from "react";
import axios from "axios";



export default class App extends React.Component {
    state = { 
      nomePlayList: "",
  
    }
  

  
  //Alterar o evento do input (input controlado)  
  onChangeCriarPlayList = (event) => {
    this.setState ({nomePlayList: event.target.value})
  }
  
  //função para criar PlayList
  criarPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
       name: this.state.nomePlayList,
    }
  
    axios.post(url, body, {
      headers: {
        Authorization: "vyctor-pierre-banu"
      }
    })
    .then((resposta) =>{ //caso de certo (resposta)
       alert("PlayList criada com sucesso!")
       this.setState({nomePlayList: ""})
    }) 
    .catch((error) => { //caso de erro
       alert("Houve algo de errado, verifique se você ja possui essa PlayList")
    })   
  }
  
  
    
  
  
    render () {
      return (
        <div className="App">
           <div>
              <h2>LABEFY</h2>
              <input placeholder ="Criar PlayList" 
                   value={this.state.nomePlayList} 
                   onChange={this.onChangeCriarPlayList}>
              </input>
              <button onClick= {this.criarPlayList}>Criar</button>
            </div>
        </div>
      )
    }  
}           