import { useState } from 'react';
import { MemoryCard } from './MemoryCard.jsx';
import { originalCardList, shuffleCards, cardIsChosen } from './cardLists.js';

export function GameBoard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [chosenIDs, setChosenIDs] = useState([]);
    const [shuffledList, setShuffledList] = useState(() => shuffleCards(originalCardList))

    function cardClick(card) {
        console.log(card.value);

        if(cardIsChosen(chosenIDs, card.id)){
            //reset
            setChosenIDs([]);
            setScore(0);
        } else {
            const newScore = score + 1;
            
            setChosenIDs([...chosenIDs, card.id]);
            setScore(newScore);

            if(newScore >= bestScore) {
                setBestScore(newScore);
            }
        }

        setShuffledList(shuffleCards(shuffledList));
    }
    
    const cards = [];
    for(let i = 0; i < shuffledList.length; i++) {
        cards.push(<MemoryCard 
            key={shuffledList[i].id} 
            value={shuffledList[i].value} 
            id={shuffledList[i].id}
            onClick={() => {cardClick(shuffledList[i])}}/>);
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