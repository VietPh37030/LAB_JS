// Dữ liệu từ API
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Muller", "Kimmich"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// nhiem vu 1
console.log("1. Cầu thủ và số bàn thắng:");
game.scored.forEach((player, index) =>
  console.log(`Goal ${index + 1}: ${player}`)
);
//${index + 1}: Đây là một biểu thức template literal để tạo chuỗi "Goal {số thứ tự}: ". Với mỗi cầu thủ, số thứ tự được tăng lên 1 để bắt đầu từ 1.
//${player}: Đây là một biểu thức template literal để lấy tên của cầu thủ.

// nhiem vu 2
let sum = 0 ;
 for (const odd of Object.values(game.odds)) {
  sum += odd;
 }
 const average = sum / Object.values(game.odds).length;
 console.log(`Tỉ lệ trung bình :${average}`);
 
// nhiem vu 3
 for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = game[team];
  console.log(`Tỉ lệ thắng của ${teamName}: ${odd}`);
 }
 
// nhiem vu 4
const scorers ={};
game.scored.forEach(player =>{ scorers[player] =(scorers[player]||0)+1;})
console.log('Đối tượng scorers: ',scorers);