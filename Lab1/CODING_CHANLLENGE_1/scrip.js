// Dữ liệu từ API
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnabry', 'Lewandowski'],
      ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Muller', 'Kimmich'],
    date: 'Nov 9th, 2030',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Nhiệm vụ 1
  const [players1, players2] = game.players;
  
  // Nhiệm vụ 2
  const [gk, ...fieldPlayers] = players1;
  
  // Nhiệm vụ 3
  const allPlayers = [...players1, ...players2];
  
  // Nhiệm vụ 4
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // Nhiệm vụ 5
  const { team1, x: draw, team2 } = game.odds;
  
  // Nhiệm vụ 6
  const printGoals = (...players) => {
    players.forEach(player => console.log(player));
  };
  printGoals(...game.scored);
  
  // Nhiệm vụ 7
  const winner = team1 < team2 && game.team1 || team1 > team2 && game.team2 || 'Draw';
  console.log(`Đội chiến thắng: ${winner}`);
  