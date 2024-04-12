document.addEventListener('DOMContentLoaded', function () {
    const gamesList = [
        { id: 1, name: 'Football: Team A vs Team B' },
        { id: 2, name: 'Basketball: Team X vs Team Y' }
    ];

    const gameSelect = document.getElementById('game');
    gamesList.forEach(game => {
        let option = document.createElement('option');
        option.value = game.id;
        option.textContent = game.name;
        gameSelect.appendChild(option);
    });

    document.getElementById('betForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedGame = gameSelect.value;
        const betAmount = document.getElementById('amount').value;
        alert(`Your bet of $${betAmount} on ${gamesList.find(g => g.id == selectedGame).name} has been placed!`);
    });
});
