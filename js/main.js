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
let cardOne = cards[0];
let cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log(`User flipped ${cardOne}`);
console.log(`User flipped ${cardTwo}`);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("found a match");
    } else {
        alert("sorry try again");
    }
}