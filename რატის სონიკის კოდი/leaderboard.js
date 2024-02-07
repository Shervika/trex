const leaderboardTable = document.getElementById('leaderboardTable');
const backToGame = document.getElementById('backToGame');

function displayLeaderboard() {
  leaderboardTable.innerHTML = '';
  const leaderboard = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (key.startsWith('highScore')) {
      const playerName = key.replace('highScore_', '');
      leaderboard.push({ player: playerName, score: parseInt(value) });
    }
  }

  leaderboard.sort((a, b) => b.score - a.score);

  leaderboard.forEach((entry, index) => {
    const row = leaderboardTable.insertRow();
    const playerCell = row.insertCell();
    const scoreCell = row.insertCell();

    playerCell.textContent = entry.player;
    scoreCell.textContent = entry.score;
  });

  backToGame.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

displayLeaderboard();