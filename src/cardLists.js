export function cardIsChosen(chosenIDs, cardID) {
    return chosenIDs.includes(cardID);
}

export function shuffleCards(array) {
    const result = [...array];

    for(let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [result[i], result[j]] = [result[j], result[i]]; //swap
    }

    return result;
}

export async function fetchCards(count) {
    const requests = []; 

    for(let i = 1; i <= count; i++) {
        requests.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
        );
    }

    const pokemon = await Promise.all(requests);

    return pokemon.map(p => ({
        id: p.id,
        name: p.name,
        image: p.sprites.front_default
    }));
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