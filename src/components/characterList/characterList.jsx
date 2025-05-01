import React from 'react'
import './characterList.css'

function CharacterList({ characters, onCharacterClick }) {
    return (
        <>
            {characters.length > 0 ? (
                <div className="character-list">
                    {characters.map((character) => (
                        <div
                            key={character.id}
                            className="character-card"
                            onClick={() => {
                                console.log("Character card clicked:", character); // Log para verificar
                                onCharacterClick(character);
                            }}
                        >
                            <img src={character.image} alt={character.name} />
                            <h2>{character.name}</h2>
                            <p>{character.species}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading characters...</p>
            )}
        </>
    )
}

export default CharacterList