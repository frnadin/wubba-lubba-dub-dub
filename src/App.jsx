import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./components/characterList/characterList";
import Pagination from "./components/Pagination/Pagination";
import Title from "./components/Title/Title";
import CharacterModal from "./components/CharacterModal/CharacterModal";
import SearchCharacter from "./components/Search/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const closeModal = () => setSelectedCharacter(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleReset = () => {
    setSearchTerm("");
    setPage(1);
    fetchCharacters("", 1);
  };

  const fetchCharacters = (search = searchTerm, currentPage = page) => {
    axios
      .get(`https://rickandmortyapi.com/api/character`, {
        params: {
          page: currentPage,
          name: search
        }
      })
      .then((response) => {
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
      })
      .catch((error) => {
        console.error("Erro ao buscar personagens:", error);
        setCharacters([]);
        setTotalPages(1);
      });
  };


  useEffect(() => {
    fetchCharacters(searchTerm, page);
  }, [page]);


  useEffect(() => {
    console.log("Selected character updated:", selectedCharacter);
  }, [selectedCharacter]);

  return (
    <div className="App">

      <Title onClick={handleReset}/>
      <SearchCharacter onSearch={(term) => {
        setSearchTerm(term);
        setPage(1);
        fetchCharacters(term, 1);
      }} />

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
