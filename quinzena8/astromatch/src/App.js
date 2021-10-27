
import TelaPrincipal  from "./TelaPrincipal";
import TelaMatchs from "./TelaMatchs";
import React, { useState }  from "react";



export const App = () => {
  const [Tela, setTela] = useState("TelaPrincipal");
 
 const PaginaDeTela = () => {
  switch (Tela) {
    case "TelaPrincipal":
      return <TelaPrincipal />;
    case "TelaMatchs":
      return <TelaMatchs />;
    default: 
      return <TelaPrincipal />  
  }
} 

  const onClickMudarTela = () => {
    if (Tela === "TelaPrincipal") {
      setTela("TelaMatchs");
    } else {
      setTela("TelaPrincipal");
    }

  }

  return (
    <div>
       {PaginaDeTela()}
       <button onClick= {onClickMudarTela}> {Tela === "TelaPrincipal"? " Ir para Matches" :" Ir para Home"}</button>
       <button> Limpar Matches</button>
    </div>
    
  );
}

export default App;