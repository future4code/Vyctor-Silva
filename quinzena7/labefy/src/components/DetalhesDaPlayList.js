import React from "react";
import axios from "axios";


export default class DetalhesDaPlayList extends React.Component {
    state = {
        musicasPlayList: [],

    }

componentDidMount() {
    this.pegarMusicasDaPlayList()
}



pegarMusicasDaPlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    axios.get(url,{
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


    render (){
        
        return (
           <div>
               Detalhes da PlayList
           </div>

        )
    }
}