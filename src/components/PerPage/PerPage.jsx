import React from "react";
import "./PerPage.css";

const CharactersPerPage = ({ charactersPerPage, onChange }) => {
  return (
    <div className="characters-per-page">
      <label htmlFor="charactersPerPage">Characters per page: </label>
      <select
        id="charactersPerPage"
        value={charactersPerPage}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
      </select>
    </div>
  );
};

export default CharactersPerPage;
