import logo from './logo.svg';
import './App.css';
import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2' 
import Etapa3 from './pages/Etapa3'
import Final from './pages/Final'
import React from 'react';




export default class App extends React.Component {
   state= {
    etapa: 1,
   }

//função de renderização
renderizaEtapa = () => {
   switch (this.state.etapa) {
       case 1:
          return <Etapa1 />;
       case 2:
           return <Etapa2 />;
       case 3:
           return <Etapa3 />;
        default:
           return <Final />;
           
   }
}

onClickirParaProximaEtapa = () => { 
   this.setState({etapa: this.state.etapa + 1})
}

    

render () {
  return (
    <div className="App">
       <div>
        {this.renderizaEtapa()}
        <br></br>
        {this.state.etapa !== 4 && (
        <button onClick={this.onClickirParaProximaEtapa}>Próxima etapa</button>
        )}
      </div>

    </div>
    )
  }
  
}


