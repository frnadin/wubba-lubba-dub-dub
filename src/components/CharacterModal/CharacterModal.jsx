import React from "react";
import "./CharacterModal.css";

import {
    HeartPulse,
    User,
    Dna,
    Globe,
    MapPin
} from "lucide-react";

function CharacterModal({ character, onClose }) {
    if (!character) return null;

    return (
        <div className="modal show" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="character-header">
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>

                </div>

                <div className="character-info">
                    <p><HeartPulse size={16} /> <strong>Status:</strong> {character.status}</p>
                    <p><Dna size={16} /> <strong>Species:</strong> {character.species}</p>
                    <p><User size={16} /> <strong>Gender:</strong> {character.gender}</p>
                    <p><Globe size={16} /> <strong>Origin:</strong> {character.origin.name}</p>
                    <p><MapPin size={16} /> <strong>Location:</strong> {character.location.name}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterModal;
