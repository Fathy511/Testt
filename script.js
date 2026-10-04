const reasons = [
  "Your smile can make my whole day better.",
  "You make ordinary moments feel special.",
  "I love how you can make me laugh without even trying.",
  "Talking to you never feels boring.",
  "You make me feel understood.",
  "I love the little things about you that nobody else notices.",
  "You somehow make bad days feel a little easier.",
  "Your presence feels like home.",
  "I love every memory we have made together.",
  "You are one of the most beautiful parts of my life.",
  "I love the person I become when I'm with you.",
  "Because, honestly... I could keep writing reasons forever."
];

let index = 0;

const intro = document.getElementById("intro");
const reasonsScreen = document.getElementById("reasons");
const finalScreen = document.getElementById("final");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const number = document.getElementById("number");
const total = document.getElementById("total");
const card = document.getElementById("reasonCard");
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

total.textContent = reasons.length;

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function updateReason() {
  reasonText.textContent = reasons[index];
  reasonNumber.textContent = index + 1;
  number.textContent = index + 1;
  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");
}

startBtn.addEventListener("click", () => {
  index = 0;
  showScreen(reasonsScreen);
  updateReason();
  tryPlayMusic();
});

nextBtn.addEventListener("click", () => {
  burstHearts();
  if (index < reasons.length - 1) {
    index++;
    updateReason();
  } else {
    showScreen(finalScreen);
  }
});

replayBtn.addEventListener("click", () => {
  index = 0;
  showScreen(reasonsScreen);
  updateReason();
});

async function tryPlayMusic() {
  try {
    await song.play();
    musicBtn.textContent = "❚❚";
    musicText.textContent = "Playing our song";
  } catch (e) {
    musicText.textContent = "Tap ♫ to play our song";
  }
}

musicBtn.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      musicBtn.textContent = "❚❚";
      musicText.textContent = "Playing our song";
    } catch (e) {
      musicText.textContent = "Add kalma.mp3 first";
    }
  } else {
    song.pause();
    musicBtn.textContent = "♫";
    musicText.textContent = "Play our song";
  }
});

function createHeart() {
  const h = document.createElement("div");
  h.className = "float-heart";
  h.textContent = Math.random() > .25 ? "♥" : "♡";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (12 + Math.random() * 24) + "px";
  h.style.animationDuration = (7 + Math.random() * 7) + "s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 15000);
}

setInterval(createHeart, 800);
for (let i = 0; i < 10; i++) setTimeout(createHeart, i * 250);

function burstHearts() {
  for (let i = 0; i < 9; i++) {
    const h = document.createElement("div");
    h.className = "float-heart";
    h.textContent = "♥";
    h.style.left = (45 + (Math.random() * 20 - 10)) + "vw";
    h.style.bottom = "45vh";
    h.style.fontSize = (15 + Math.random() * 20) + "px";
    h.style.animationDuration = (2 + Math.random() * 2) + "s";
    document.querySelector(".hearts").appendChild(h);
    setTimeout(() => h.remove(), 4500);
  }
}
