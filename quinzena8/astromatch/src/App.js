
import TelaPrincipal  from "./Pages/TelaPrincipal";
import TelaMatchs from "./Pages/TelaMatchs";
import React, { useState }  from "react";
// import axios from "axios";



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
    }else {
      setTela("TelaPrincipal");
    }

  }

  



  return (
    <div>
       {PaginaDeTela()}
       <button onClick= {onClickMudarTela}> {Tela === "TelaPrincipal"? " Ir para Matches" :" Ir para Home"}</button>
       
    </div>
    
  );
}

export default App;