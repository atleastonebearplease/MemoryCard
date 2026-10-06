import { useState } from 'react';

export function GameBoard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    const cards = [];

    for(let i = 0; i < 20; i++) {
        cards.push(<Card key={i} />);
    }


    return (
        <div className="game">
            <h1>Memory Card</h1>
            <h2>Score: {score}</h2>
            <h2>Best Score: {bestScore}</h2>

            <div className="card-container">
                {cards}
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="test-card"></div>
    )
}