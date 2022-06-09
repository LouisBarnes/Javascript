const team = {
  _players: [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Ray', lastName: 'Finkle', age: 21},
    {firstName: 'Tom', lastName: 'Brady', age: 29}],
  _games: [
    {opponent: 'Jets',teamPoints: 20,opponentPoints: 10},
    {opponent: 'Giants',teamPoints: 45,opponentPoints: 65},
    {opponent: 'Bulls',teamPoints: 2,opponentPoints: 12}],
  
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Tommy', 'Green', 26); //Add additional players
team.addGame('Titans', 100, 98); //Add game additional info here
console.log(team.players);
console.log(team.games)
