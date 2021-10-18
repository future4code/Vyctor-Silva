import React from "react";
import axios from "axios";





export default class AdicionarMusicaNaPlayList extends React.Component {
    state= {
        musicaNaPlayList: [],
        nomeDaMusica: "",
        artista: "",
        url: "",
    }
    
  
onChangeNomaDaMusica = (event) => {
    this.setState({nomeDaMusica: event.target.value})

}    

onChangeArtista = (event) => {
    this.setState({artista: event.target.value})

} 

onChangeUrl = (event) => {
    this.setState({url: event.target.value})

} 

// idPlayList = (resposta) => {
//     let id = resposta.data.result.list.id
// }



adicionarMusicaEmPlayList = (id) => {
    id= this.props.todasPlayLists
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const body = {
        name: this.state.nomeDaMusica, 
        artist: this.state.artista,
        url: this.state.url
    }

    axios.post(url, body, {
        headers: {
            Authorization: "vyctor-pierre-banu"
        }
    })
    .then((resposta) => {
       console.log(resposta)
       
    })
    .catch((erro) => {
       console.log(erro)
    })
}    
    
    
    
    
    render()  {
        
        // const adicionarMusica = this.state.PlayLists.map((playlista) => {
        //      return <button onClick= {() => this.adicionarMusicaEmPlayList(playlista.id)}>Adicionar</button>
        // })


        return (
            <div>
                <h2>Adicionar Musica na PlayList </h2>
                <input 
                    placeholder= "Digite o nome da musica"
                    value= {this.state.nomeDaMusica}
                    onChange= {this.onChangeNomaDaMusica}
                />
                
                <input
                    placeholder= "Digite o Artista ou Banda"
                    value= {this.state.artista}
                    onChange= {this.onChangeArtista}
                />
                <input
                    placeholder= "Insira a URL"
                    value= {this.state.url}
                    onChange= {this.onChangeUrl}
                />
                <button onClick={()=> this.adicionarMusicaEmPlayList(this.props.todasPlayLists)}> Adicionar</button>
            </div>
            
        )
    }
}