const cards = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

const cardElement = document.getElementById('card');
const shuffleButton = document.getElementById('shuffle-btn');
const drawButton = document.getElementById('draw-btn');
const restartButton = document.getElementById('restart-btn');
const shareButton = document.getElementById('share-btn');

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    cardElement.textContent = '點擊抽一張牌';
}

function drawCard() {
    if (cards.length === 0) {
        cardElement.textContent = '牌已經抽完了';
    } else {
        const drawnCard = cards.pop();
        cardElement.textContent = drawnCard;
    }
}

function restartGame() {
    cards.length = 48;
    shuffleCards();
}

function shareCard() {
    // 將抽到的牌圖片生成分享圖片的功能，這裡可以使用 HTML2Canvas 或其他相關庫實現
    // 然後提供下載或分享的功能
}

shuffleButton.addEventListener('click', shuffleCards);
drawButton.addEventListener('click', drawCard);
restartButton.addEventListener('click', restartGame);
shareButton.addEventListener('click', shareCard);
