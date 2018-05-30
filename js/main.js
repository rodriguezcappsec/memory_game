let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log(cardsInPlay.length === 2);
cardsInPlay[0] === cardsInPlay[1] ? alert("is a Match") : alert("sorry try again");