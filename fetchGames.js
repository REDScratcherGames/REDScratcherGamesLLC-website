// fetchGames.js

// Function to fetch games from GameJolt
async function fetchGames() {
    try {
        // Replace this URL with the correct GameJolt API endpoint for fetching user games
        const response = await fetch('https://api.gamejolt.com/api/game/v1/games?username=REDScratcher');
        const data = await response.json();

        if (data.success === "true") {
            displayGames(data.response.games);
        } else {
            document.getElementById('games-list').innerText = 'Failed to fetch games.';
        }
    } catch (error) {
        console.error('Error fetching games:', error);
        document.getElementById('games-list').innerText = 'Error fetching games.';
    }
}

// Function to display games on the HTML page
function displayGames(games) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';

    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');

        const gameTitle = document.createElement('div');
        gameTitle.classList.add('game-title');
        gameTitle.innerText = game.title;
        gameDiv.appendChild(gameTitle);

        const gameThumbnail = document.createElement('img');
        gameThumbnail.src = game.thumbnail_url;
        gameDiv.appendChild(gameThumbnail);

        gamesList.appendChild(gameDiv);
    });
}

// Fetch games when the page loads
document.addEventListener('DOMContentLoaded', fetchGames);
