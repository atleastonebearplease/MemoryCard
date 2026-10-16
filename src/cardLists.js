export let originalCardList = [];

for(let i = 0; i < 20; i++) {
    originalCardList.push({
        id: crypto.randomUUID(),
        value: i
    })
}

export let chosenList = [];
export let shuffledList = [];

export function cardIsChosen(cardID) {
    return chosenList.some((card) => {
        return card.id === cardID
    });
}

export function shuffleCards(array) {
    const result = [...array];

    for(let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [result[i], result[j]] = [result[j], result[i]]; //swap
    }

    return result;
}

/* 
Clicks a card
If it has not been clicked
    Add its ID to the list of clicked cards
    Add a point
    If the current score is greater than the best score
        set the best score to the current score
    Shuffle the card ID
If it has been clicked
    set the score to zero
    clear the clicked cards
    shuffle the cards 
*/