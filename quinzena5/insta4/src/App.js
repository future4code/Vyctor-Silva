import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import ImagemPierre from './img/foto_pierre.jpeg'
import ImagemJulliana from './img/foto_julliana.jpeg'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
       
       <Post
          nomeUsuario={'julliana'}
          fotoUsuario={ImagemJulliana}
          fotoPost={ImagemJulliana}
        />
        
        <Post
          nomeUsuario={'pierre'}
          fotoUsuario={ImagemPierre}
          fotoPost={ImagemPierre}
        />


      </MainContainer>
    );
  }
}

export default App;
