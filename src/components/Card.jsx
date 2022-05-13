export default function Card({ character }) {
    return (
        <div>
            <p>{character.name}</p>
            <img src={character.image} alt={`alt text for pic of ${character.name}`} />
            <p>Status: {character.status}</p>
        </div>
    )
}