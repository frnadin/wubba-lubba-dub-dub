import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./components/characterList/characterList";
import Pagination from "./components/Pagination/Pagination";
import Title from "./components/Title/Title";
import CharacterModal from "./components/CharacterModal/CharacterModal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const closeModal = () => setSelectedCharacter(null);

  const handleCharacterClick = (character) => {
    console.log('Character selected:', character); // Verifique se o personagem está correto
    setSelectedCharacter(character);
};


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  useEffect(() => {
    console.log("Selected character updated:", selectedCharacter);
  }, [selectedCharacter]);

  return (
    <div className="App">

      <Title />
      <CharacterList characters={characters} onCharacterClick={handleCharacterClick} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      
      {selectedCharacter && (
       <div className="modal show" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CharacterModal character={selectedCharacter} onClose={closeModal} />
        </div>
    </div>
)}




    </div>
  );
}

export default App;
