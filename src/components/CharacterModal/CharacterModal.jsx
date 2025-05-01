import React from "react";
import "./CharacterModal.css";

function CharacterModal({ character, onClose }) {
    if (!character) return null; 

    return (
        <div className="modal show" onClick={onClose}> 
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
            </div>
        </div>
    );
}

export default CharacterModal;
