// let cards = [{
//         rank: 'queen',
//         suit: 'hearts',
//         cardImage: "images/queen-of-hearts.png",
//     },
//     {
//         rank: 'queen',
//         suit: 'diamonds',
//         cardImage: "images/queen-of-diamonds.png",
//     },
//     {
//         rank: 'king',
//         suit: 'hearts',
//         cardImage: "images/king-of-hearts.png",
//     },
//     {
//         rank: 'king',
//         suit: 'diamonds',
//         cardImage: "images/king-of-diamonds.png",
//     }
// ];
// let cardsInPlay = [];


let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let checkForMatch = () => {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}


let flipCard = (cardId) => {
    checkForMatch();
    console.log(`User flipped ${cards[cardId]}`);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("found a match");
        } else {
            alert("sorry try again");
        }
    }
}

flipCard(0);
flipCard(1);