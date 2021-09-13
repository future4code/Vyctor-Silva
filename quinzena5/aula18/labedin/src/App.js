import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';

const Minhaimagem = require('./img/Imagem/minhaimagem.jpeg')

// estilização CardGrande
// const estilizaçãoCardGrande = styled.div`
//    display: flex;
//    align-items: center;
//    border: 1px solid black;
//    padding: 20px 10px;
//    margin-bottom: 10px;
//    height: 200px;
 
//  img{
//     width: 70px;
//     margin-right: 10px;
//     border-radius: 50%;
//  }  

//  h4{
//     margin-bottom: 15px;
//  }

//  div{
//     display: flex;
//     flex-direction: column;
//     justify-items: flex-start;
//  }
 
// `

// estilização CardPequeno
// const estilizaçãoCardPequeno = styled.p`
//   border: 1px solid black;
//   padding: 20px;
// `

// estilização ImagemButton
// const estilizaçãoImagemButton = styled.div`
//     display: flex;
//     align-items: center;
//     border: 1px solid black;
//     border-radius: 50px;
//     width: 200px;
//     padding: 15px 30px;
//     margin: 10px auto;
 
// img{
//     width: 30px;
//     margin-right: 10px;
//  }
// `

// Não consegui pensar em um jeito de estilizar usando styled-components, pois se eu colocar a minha tag estilizada, irei 
// retirar a tag com os props


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        
        
        <CardGrande 
          imagem={Minhaimagem} 
          nome="Vyctor Pierre" 
          descricao="Oi, eu sou o Vyctor. Sou aluno da Labenu. Atualmente trabalho na Oi S.A na gerencia de aprovisionamento de dados, mas pretendo migrar para area de programação"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          email="Email: vyctorpierre2009@gmail.com"
          endereço="Endereço: Av. Roberto Silveira nº: 1000"
        />  
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
