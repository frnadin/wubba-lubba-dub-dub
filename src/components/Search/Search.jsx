import React, { useState } from "react";
import { Search } from "lucide-react";
import "./Search.css";



function SearchCharacter({ onSearch  }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSearch(searchTerm.trim());
    };
    
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for a character..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
                <Search size={16} />
            </button>
        </form>
    );
}

    export default SearchCharacter;