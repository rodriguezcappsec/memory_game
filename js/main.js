let cards = [{
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png",
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png",
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png",
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png",
    }
];
let cardsInPlay = [];


let checkForMatch = () => {
    (cardsInPlay[0] === cardsInPlay[1]) ?
    alert("You Found a Match"):
        alert("Sorry, try again")
}

let fliCard = (cardId) => {
    checkForMatch();
    cardsInPlay.push(cards[cardId].rank);
    console.log(`User Flipped ${cards[cardId].rank}`);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
}



fliCard(0);
fliCard(2);