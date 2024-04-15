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

function drawCard() {
    // 隨機生成 1 到 48 的數字表示抽到的卡牌
    const cardNumber = Math.floor(Math.random() * 48) + 1;

    // 假設 isStrength 是判斷卡牌是否是自己的強項的變數
    const isStrength = true; // 假設是強項

    let message;
    if (cardNumber <= 24) { // 認可牌
        if (isStrength) {
            message = "在自己心中默唸３次，給予自己認可，增加信心。";
        } else {
            message = "根據此張認可牌卡號找到相對應的成長牌，作為你今天的功課。";
        }
    } else { // 成長牌
        if (isStrength) {
            message = "找到相對應的認可牌，在心中默唸３次，給予自己認可，增加信心。";
        } else {
            message = "這是你今天的功課，試試看吧！";
        }
    }

    // 將消息顯示在網頁上，例如將消息設置為某個元素的文字內容
    document.getElementById('message').innerText = message;
}

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
