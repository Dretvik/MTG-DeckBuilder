// mainPageController.js

document.addEventListener('DOMContentLoaded', () => {
    const cardDisplayDiv1 = document.getElementById('cardDisplayDiv1');
    const cardDisplayDiv2 = document.getElementById('cardDisplayDiv2');

    const pageSize = 100;
    const totalPages = 10;

    async function fetchMTGData() {
        try {
            for (let page = 1; page <= totalPages; page++) {
            const response = await fetch('https://api.magicthegathering.io/v1/cards');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)
            const cards = data.cards.filter(card => card.multiverseid);

            // Stæsjer kortene i et array.
            cardsArray.push(...cards);

            // Viser kortene
            cardDisplayDiv2.innerHTML = cards.map((card, index) => /*HTML*/`
                <div class="mtgCards">
                    <span>${card.name}</span>
                    <br>
                    <img 
                        onclick="addToDeck(${index})"
                        class="cardImages"
                        src="${card.imageUrl}">
                </div>
            `).join('');
            //Kan loope igjennom kortene om jeg trenger mer info:
            cardsArray.forEach(card => {
                console.log('Card Object:', card);
            });
        }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchMTGData();
});

function addToDeck(cardIndex) {
    console.log('Adding to deck:', cardsArray[cardIndex]);
    currentDeck.push(cardsArray[cardIndex]);

    cardDisplayDiv1.innerHTML = currentDeck.map((deckCard, index) => /*HTML*/`
        <div class="deckCard">
            <span>${deckCard.name}</span>
            <br>
            <img 
                onclick="removeCardFromDeck(${index})"
                src="${deckCard.imageUrl}"
                class="cardImages">
        </div>
    `).join('');
}

function removeCardFromDeck(cardIndex) {
    console.log('Removing from deck:', currentDeck[cardIndex]);
    currentDeck.splice(cardIndex, 1);

    cardDisplayDiv1.innerHTML = currentDeck.map((deckCard, index) => /*HTML*/`
        <div class="deckCard">
            <span>${deckCard.name}</span>
            <br>
            <img 
                onclick="removeCardFromDeck(${index})"
                src="${deckCard.imageUrl}"
                class="cardImages">
        </div>
    `).join('');
}