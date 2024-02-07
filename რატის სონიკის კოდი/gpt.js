const usernameInput = document.getElementById('username');
const playButton = document.getElementById('tamashi');
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById('score');
const submitButton = document.getElementById('submitButton');
let score = 0;
let record = 0;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

// ... (rest of the code)

if (score > record) {
    const username = usernameInput.value.trim();
    localStorage.setItem(`highScore_${username}`, score);
    record = score;
    scoreDisplay.textContent = `Score: ${record}`;
  }
  
  // ... (rest of the code)

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert(`Game Over! Your Score: ${score} record: ${record}`);
    score = 0;
    scoreDisplay.textContent = score;
    record = Math.max(record, score);
    localStorage.setItem('highScore', record);
  } else if (cactusLeft <= 0) {
    updateScore();
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

function updateScore() {
  score += 5;
  scoreDisplay.textContent = `Score: ${score}`;

  if (score > record) {
    record = score;
    scoreDisplay.textContent = `Score: ${record}`;
    localStorage.setItem('highScore', record);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var usernameInput = document.getElementById('username');
  var submitButton = document.getElementById('submitButton');
  var playButton = document.getElementById('tamashi');

  usernameInput.addEventListener('input', function () {
    submitButton.disabled = usernameInput.value.trim() === '';
  });

  document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  });

  playButton.addEventListener('click', function (event) {
    if (submitButton.disabled) {
      event.preventDefault();
      alert('Please enter your name and submit the form before playing.');
    } else {
      score = 0;
      scoreDisplay.textContent = score;
      record = localStorage.getItem('highScore') || 0;
    }
  });
});