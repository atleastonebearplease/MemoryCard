export function MemoryCard({id, value, onClick}) {
    return (
        <div className="test-card" id={id} onClick={onClick}>{value}</div>
    )
}