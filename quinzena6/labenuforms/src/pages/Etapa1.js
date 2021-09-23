import React from 'react'
import styled from 'styled-components'

const Conteiner = styled.div`
  
`


export default class DadosGerais extends React.Component {
  state = {
    nome: '',
    idade: '',
    email:'',
  }

onChangeNome = (event) => {
  this.setState({nome: event.target.value})
}

onChangeIdade = (event) => {
    this.setState({idade: event.target.value})
}

onChangeEmail = (event) => {
    this.setState({email: event.target.value})
}

render () {
    return (
        <Conteiner>
          <div>
             <h3>ETAPA 1 - DADOS GERAIS</h3>
             <p>1. Qual o seu nome?</p>
             <input onChange={this.onChangeNome} value= {this.state.nome}></input>
          </div>
          <div>
             <p>2. Qual sua idade?</p>
             <input onChange={this.onChangeIdade} value= {this.state.idade}></input>
          </div>
          <div>
             <p>3. Qual seu email?</p>
             <input onChange={this.onChangeEmail} value= {this.state.email}></input>
          </div>
          <div>
             <p>4. Qual a sua escolaridade?</p>
                <select>
                  <option value='Ensino medio incompleto'>Ensino medio incompleto</option>
                  <option value='Ensino medio completo'>Ensino medio completo</option>
                  <option value='Ensino superior incompleto'>Ensino superior incompleto</option>
                  <option value='Ensino superior completo'>Ensino superior completo</option>
                </select>
          </div>      
          <br></br>
          {/* <div>
          <button>Proxima Etapa</button>      
          </div> */}
        </Conteiner>
    );
  }
}


