const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let player1 = [...game.players[0]];
console.log(player1);
let player2 = [...game.players[1]];
console.log(player2);

let [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

let allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

let players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

let {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

function printGoals(...players){
    console.log(`${players.length} goals were scored`);
}
printGoals("Davies", "Muller", "Lewandowsaki", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

console.log(game.odds.team1<game.odds.team2 && "Team 1 is more likely to win");
console.log(game.odds.team2<game.odds.team1 && "Team 2 is more likely to win");