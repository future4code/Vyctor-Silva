import React from "react";


export default class InfoGeraisEnsino extends React.Component {
    state= {
        terminograduação: '',
    }


    onChangeTerminoGraduação = (event) => {
        this.setState=({terminograduação: event.target.value})
    }


    render (){
        return (
            <div>
               <div>
                   <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>  
                   <p>7. Por que você não terminou um curso de graduação?</p>
                   <input onChange={this.onChangeTerminoGraduação} value={this.state.terminograduação} ></input>
               </div>
               <div>
                    <p>8. Você fez algum curso complementar?</p>
                    <select>
                        <option value= 'Curso técnico'>Curso técnico</option>
                        <option value= 'Cursos de inglês'>Cursos de inglês</option>
                        <option value= 'Não fiz curso complementar'>Não fiz curso complementar</option>
                    </select>
               </div>
     
     
            </div>
        )    
    }
}