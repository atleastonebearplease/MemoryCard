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