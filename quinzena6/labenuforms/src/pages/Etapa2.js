import React from "react";


export default class InfoEnsinoSuperior extends React.Component {
  state = {
      curso: '',
      unidade: ''
  }  

onChangeCurso = (event) => {
  this.setState({curso: event.target.value})
}  

onChangeUnidade = (event) => {
  this.setState({unidade: event.target.value})  
}
  
  
render (){
   return (
       <div>
          <div>
              <h3>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h3>  
              <p>5. Qual curso?</p>
              <input onChange={this.onChangeCurso} value= {this.state.curso} ></input>
          </div>
          <div>
               <p>6. Qual a unidade de ensino?</p>
               <input onChange={this.onChangeUnidade} value={this.state.unidade} ></input>
          </div>


       </div>
   )     
  }
}