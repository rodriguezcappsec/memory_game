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
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    }
}


let flipCard = (e) => {
    const el = e.target
    var cardId = el.getAttribute("data-id");
    el.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("found a match");
        } else {
            alert("sorry try again");
        }
    }
}

let createBoard = () => {

    window.onload = () => {
        for (let index = 0; index < cards.length; index++) {
            var creatImg = document.createElement('img');
            creatImg.setAttribute('src', "images/back.png");
            creatImg.setAttribute('data-id', index);
            creatImg.addEventListener("click", flipCard);
            document.getElementById('game-board').appendChild(creatImg);
        }
    }
}
createBoard();