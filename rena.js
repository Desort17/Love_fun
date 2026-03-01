const messages = [
  "No 😒",
  "Are you sure?",
  "Think again…",
  "Last chance 🥺",
  "Okay fine 😌"
];

const stickerImages = [
  "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
];

let messageIndex = 0;
let stickerIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const sticker = document.getElementById("sticker");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  stickerIndex = (stickerIndex + 1) % stickerImages.length;
  sticker.src = stickerImages[stickerIndex];

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  for (let i = 0; i < 10; i++) {
    createHeart();
  }

  setTimeout(() => {
    alert("Yayyy 💖 I knew it!");
  }, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}
