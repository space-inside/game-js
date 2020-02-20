let body = document.querySelector('.content');
const levelObj = {
    'simple': 3,
    'middle': 6,
    'hard': 9
};
let buttonStart = document.querySelector('.menu__start');
let levels = [...document.querySelectorAll('.menu__level')];
let menu = document.querySelector('.menu');
buttonStart.addEventListener('click', chooseLevel);
function chooseLevel() {
    levels.forEach(function (level, i) {
        if (level.checked) {
            menu.style.display = 'none';
            let level = levels[i].value;
            createCards(level);
        }    
    });
}
function createCards(level) {
    let looTable = document.createElement('div');
    looTable.classList.add('loo-table');
    body.append(looTable);
    for (let k = 0; k < levelObj[level]; k++) {
        let card = document.createElement('div');
        card.classList.add('card', 'card-hover');
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
function generateBug() {
    let amountCard = [...document.querySelectorAll('.card')];
    let amountBackCard = [...document.querySelectorAll('.card-back-img')];
    let bug = (function() {
        return Math.round(Math.random()*(amountCard.length - 1));
    })();
    amountBackCard[bug].src = "img/bug.png";
}

function flip() {
    let flippedCard = false;
    let cards = [...document.querySelectorAll('.card')];
    let cardsInner = [...document.querySelectorAll('.card-inner')];
    cards.forEach(function (card, i) {
        card.addEventListener('click', function () {
            if (!flippedCard) {
                cardsInner[i].classList.add('flip');
                card.classList.remove('card-hover');
                flippedCard = true;
            }
            else {
                let looTable = document.querySelector('.loo-table');
                looTable.remove();
                console.log(cards.length+1);
                body.classList.remove('content'+ cards.length);
                menu.style.display = 'flex';
                flippedCard = false;
            }
        });
    });
}
