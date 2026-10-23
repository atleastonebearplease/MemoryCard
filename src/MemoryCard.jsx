export function MemoryCard({id, onClick, image, name}) {
    return (
        <div className="test-card" id={id} onClick={onClick}>
            <img src={image} alt={name}></img>
            <p>{name}</p>
        </div>
    )
}