import React from "react";
import axios from "axios";
import VisualizarPlayList from "./components/VisualizarPlayList";
import DetalhesDaPlayList from "./components/DetalhesDaPlayList";
import AdicionarMusicaNaPlayList from "./components/AdicionarMusicaNaPlayList";
import CriarPlayList from "./components/CriarPlayList";



export default class App extends React.Component {
  state = {
    telaAtual: "criarplayList", 

  }

escolherTela = () => {
  switch (this.state.telaAtual) {
    case "criarplayList":
      return <CriarPlayList />;
    case "verplayList":
      return <VisualizarPlayList />;
    case "detalhedaplayList":
      return <DetalhesDaPlayList />;
    case "adicionarmusicanaplayList":
      return <AdicionarMusicaNaPlayList  />;  
    default:
      return <CriarPlayList />;  
  }
}

mudaTela = (nomeTela) => {
  this.setState({telaAtual: nomeTela})
}


  render () {
    return (
      <div className="App">
          <h2>LABEFY</h2>
          <button onClick= {() => this.mudaTela("criarplayList")}>Criar PlayList</button>
          <button onClick= {() => this.mudaTela("verplayList")}>Ver Lista de PlayList</button>
          <button onClick= {() => this.mudaTela("detalhedaplayList")}>Detalhes da PlayList</button>
          <button onClick= {() => this.mudaTela("adicionarmusicanaplayList")}>Adicionar Musicas na PlayList</button>
          {this.escolherTela()}

      </div>
    );
  }
}  


