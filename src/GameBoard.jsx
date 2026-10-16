import { useState } from 'react';
import { MemoryCard } from './MemoryCard.jsx';
import { originalCardList, shuffledList, chosenList } from './cardLists.js';

export function GameBoard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    const cards = [];

    for(let i = 0; i < originalCardList.length; i++) {
        cards.push(<MemoryCard key={originalCardList[i].id} value={originalCardList[i].value} id={originalCardList[i].id}/>);
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