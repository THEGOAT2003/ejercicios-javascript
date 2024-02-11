const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let streamer = streamers.filter(game => {
if (game.gameMorePlayed == 'League of Legends' && game.age < 30) {
    return game
}

}
)
console.log(streamer);
//aqui se ha usado un && para añadir gameMorePlayed Y age