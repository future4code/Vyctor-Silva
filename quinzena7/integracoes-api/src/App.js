import React from 'react';
import axios from 'axios';
import './App.css';




export default class App extends React.Component  {
  state= {
    nome: '',
    email: '',
    listaUsuarios: [],
    
  }
  
  
onChangeNome = (event) => {
  this.setState({ nome: event.target.value });
};

onChangeEmail = (event) => {
  this.setState({ email: event.target.value });
};

//


//criar usuario na API
criarUsuario = () => {
  const body = {
    name: this.state.nome,
    email: this.state.email
  };

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
    
     headers:  {
          Authorization: 'pierre-silva-banu'
        }
}).then((res) => {
      console.log(res);
      alert('O usuário foi criado com sucesso!')
}).catch((err) => {
      console.log(err)
      alert('Deu Ruim!')
});
};

//Pegar usuarios cadastrados na API
pegarUsuarios = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
        Authorization: 'pierre-silva-banu'
      }
}).then((res) => {
      //é o que rola se der certo
      this.setState({ listaUsuarios: res.data.result.list });
      

}).catch((err) => console.log(err)); // é o que rola se der errado
  
};


  
  render() {
  
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button>Trocar de Página</button>
          <div>
             <h2>Criar usuário</h2>
             <input placeholder='Nome' value= {this.state.nome} onChange={this.onChangeNome}></input>
             <input placeholder='Email' value= {this.state.email} onChange= {this.onChangeEmail}></input>
             <button onClick= {this.criarUsuario} >Criar</button>
          </div>
      </div>
    );
  }
}
