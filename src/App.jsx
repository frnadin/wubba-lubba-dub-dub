import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./components/characterList/characterList";
import Pagination from "./components/Pagination/Pagination";
import Title from "./components/Title/Title";
import CharacterModal from "./components/CharacterModal/CharacterModal";
import SearchCharacter from "./components/Search/Search";
import StatusFilter from "./components/StatusFilter/StatusFilter";
import CharactersPerPage from "./components/PerPage/PerPage";
import Footer from "./components/Footer/Footer";
import portal from "./../public/portal.gif";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [charactersPerPage, setCharactersPerPage] = useState(20);

  const closeModal = () => setSelectedCharacter(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedStatus("All");
    setCharactersPerPage(20);
    setPage(1);
  };
  

  const fetchCharacters = async () => {
    try {
      const firstPage = await axios.get(`https://rickandmortyapi.com/api/character`);
      const totalPages = firstPage.data.info.pages;

      const promises = [];
      for (let i = 1; i <= totalPages; i++) {
        promises.push(axios.get(`https://rickandmortyapi.com/api/character?page=${i}`));
      }

      const results = await Promise.all(promises);
      const allCharactersData = results.flatMap((res) => res.data.results);

      setAllCharacters(allCharactersData);
      setTotalPages(Math.ceil(allCharactersData.length / charactersPerPage));
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
      setAllCharacters([]);
      setTotalPages(1);
    }
  };


  const filteredCharacters = allCharacters.filter((character) => {
    const matchesSearchTerm = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || character.status === selectedStatus;
    return matchesSearchTerm && matchesStatus;
  });

  const startIndex = (page - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const displayedCharacters = filteredCharacters.slice(startIndex, endIndex);


  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    const filteredAndPaginated = filteredCharacters.slice(startIndex, endIndex);
    setCharacters(filteredAndPaginated);
    setTotalPages(Math.ceil(filteredCharacters.length / charactersPerPage));
  }, [searchTerm, selectedStatus, page, charactersPerPage, filteredCharacters]);

  return (
    <div className="App">

      <Title onClick={handleReset} />

      <SearchCharacter onSearch={(term) => {
        setSearchTerm(term);
        setPage(1);
      }} />

      <StatusFilter
        selectedStatus={selectedStatus}
        onStatusChange={(status) => {
          setSelectedStatus(status);
          setPage(1);
        }}
      />

      <CharactersPerPage
        charactersPerPage={charactersPerPage}
        onChange={(value) => {
          setCharactersPerPage(value);
          setPage(1);
        }}
      />


      <CharacterList characters={displayedCharacters} onCharacterClick={handleCharacterClick} />
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

<a href="#top" className="back-to-top">
        <img src={portal} alt="Portal do Rick" className="portal-image" />
      </a>

<Footer />

    </div>
    
  );
}

export default App;
