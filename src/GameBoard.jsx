import { useState, useEffect } from 'react';
import { MemoryCard } from './MemoryCard.jsx';
import { shuffleCards, cardIsChosen, fetchCards } from './cardLists.js';

export function GameBoard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [chosenIDs, setChosenIDs] = useState([]);
    const [shuffledList, setShuffledList] = useState([]);

    useEffect(() => {
        let ignore = false;

        fetchCards(20).then(cards => {
            if(!ignore) {
                setShuffledList(shuffleCards(cards));
            }
        })

        return () => {
            ignore = true;
        }
    }, []);

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
            name={shuffledList[i].name}
            image={shuffledList[i].image}
            id={shuffledList[i].id}
            onClick={() => {cardClick(shuffledList[i])}}/>);
    }

    if(shuffledList.length === 0) {
        return <div className="game"><h1 className="game-title">Loading Cards...</h1></div>;
    }

    return (
        <div className="game">
            <header className="game-header">
                <h2 className="score">Score: <span key={score} className="pop">{score}</span></h2>
                <h1 className="game-title">Memory Card</h1>
                <h2 className="score best">Best Score: <span key={bestScore} className="pop">{bestScore}</span></h2>
            </header>

            <div className="card-container">
                {cards}
            </div>
        </div>
    )
}