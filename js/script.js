let body = document.querySelector('.content');
const levelObj = {
    'simple': 3,
    'middle': 6,
    'hard': 9
};
let buttonStart = document.querySelector('.menu__start');
buttonStart.addEventListener('click', chooseLevel);
function chooseLevel() {
    let levels = document.querySelectorAll('.menu__level');
    let looTable = document.createElement('div');
    looTable.classList.add('loo-table');
    body.append(looTable);
    for (let i = 0; i < levels.length; i++) {
        if (levels[i].checked) {
            let menu = document.querySelector('.menu');
            menu.style.display = 'none';
            let level = levels[i].value;
            for (let k = 0; k < levelObj[level]; k++) {
                let card = document.createElement('div');
                card.classList.add('card');
                looTable.appendChild(card);
                let cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');
                card.appendChild(cardInner);
                let cardFront = document.createElement('div');
                cardFront.classList.add('card-front');
                cardInner.appendChild(cardFront);
                let cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                cardInner.appendChild(cardBack);
                let cardFrontImg = document.createElement('img');
                cardFrontImg.src = "img/card.png";
                cardFrontImg.classList.add('card-front-img');
                cardFront.appendChild(cardFrontImg);
                let cardBackImg = document.createElement('img');
                cardBackImg.src = "img/game.png";
                cardBackImg.classList.add('card-back-img');
                cardBack.appendChild(cardBackImg);
                body.classList.add("content"+levelObj[level]);
            }
            generateBug();
            flip();

        }    
    }
}
function generateBug() {
    let amountCard = document.querySelectorAll('.card');
    let amountBackCard = document.querySelectorAll('.card-back-img');
    let bug = (function() {
        return Math.round(Math.random()*amountCard.length);
    })();
    amountBackCard[bug].src = "img/bug.png";
}

let flippedCard = false;
function flip() {
    let cards = document.querySelectorAll('.card');
    let cardsInner = document.querySelectorAll('.card-inner');

    cards.forEach(function (card, i) {
        card.addEventListener('click', function () {
            if (flippedCard) {
                let looTable = document.querySelector('.loo-table');
                looTable.remove();
                let menu = document.querySelector('.menu');
                menu.style.display = 'flex';
                flippedCard = false;
            }
            else {
                cardsInner[i].classList.add('flip');
                flippedCard = true;
            }
        });
    });
}