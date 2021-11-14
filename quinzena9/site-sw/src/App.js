import { useState } from "react";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage"; 
import CharacterListPage from "./CharacterListPage/CharacterListPage";

function App() {
  const [ currentPage , setCurrentPage ] = useState ("list")
  const [ clickedCharacterUrl, setClickedCharacterUrl ] = useState ("")

  const selectPage = () => {
    if(currentPage === "list") {
       return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
    } else if (currentPage === "detail") {
       return <CharacterDetailPage goToListPage={goToListPage} url={clickedCharacterUrl}/>
    }
     
  }

  const goToDetailsPage = (url) => {
      setCurrentPage("detail")
      setClickedCharacterUrl(url) 
    }

  const goToListPage = () => {
      setCurrentPage("list")
      setClickedCharacterUrl("")
    }
   
  return (
    
    <div className="App">
      {selectPage()}
      
    
    </div>
  );
}

export default App;
