import { useState, useEffect } from "react";

export default function List() {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    async function fetchCharacters() {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await res.json();
        setCharacter(results);
        setLoading(false);
    };
    fetchCharacters();
    }, []);

    return (
        <>
          <h1>Rick and Morty Character List!</h1>
          {loading ? (
              <h3>Loading!</h3>
          ) : (
              <>
                <div className="card">
                    {character.map((char) => 
                        <section key={char.id}>
                        <p>{char.name}</p>
                        </section>
                    )}
                </div>
              </>
          )}
        </>
    )
}