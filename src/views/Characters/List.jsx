import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';

export default function List() {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const location = useLocation();
    const status = new URLSearchParams(location.search).get('status') ?? 'all';

    useEffect(() => {
    async function fetchCharacters() {
        setLoading(true);

        const search = new URLSearchParams(location.search);
        const params = search.get('status') ?? 'all';

        const url =
          params === 'all' ? 'https://rickandmortyapi.com/api/character' : `https://rickandmortyapi.com/api/character?status=${status}`;

        const res = await fetch(url);
        const data = await res.json();
        setCharacter(data.results);
        setLoading(false);
    };
    fetchCharacters();
    }, [location.search]);

    return (
        <>
          <h1>Rick and Morty Character List!</h1>
          {loading ? (
              <h3>Loading!</h3>
          ) : (
              <section>
                <label htmlFor="status">
                    Search By Character Status
                </label>
                <select name=''
                    id='status'
                    value={status}
                    onChange={(e) => history.push(`/?status=${e.target.value}`)}>
                    <option value='all'>All</option>
                    <option value='alive'>Alive</option>
                    <option value='dead'>Dead</option>
                    <option value='unknown'>Unknown</option>
                </select>
                <div className="card">
                    {character.map((character) => (
                        <Link to={`/character/${character.id}`} key={character.id + character.name}>
                            <Card character={character} />
                        </Link>
                    )
                    )}
                </div>
              </section>
          )}
        </>
    )
}