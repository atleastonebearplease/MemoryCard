export function MemoryCard({id, onClick, image, name}) {
    return (
        <div className="card card-shadow" id={id} onClick={onClick}>
            <img className="card-image" src={image} alt={name}></img>
            <div className="text-container">
                <p>{name}</p>
            </div>
        </div>
    )
}