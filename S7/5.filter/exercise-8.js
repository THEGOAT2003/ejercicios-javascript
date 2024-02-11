const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

//const text = document.querySelector(".inputStreamers")

//text.addEventListener("input", function(){
//const searchTerm = text.value;

//const filterStreamer = streamers.filter((nuevo) => {
  //  return nuevo.name.includes(searchTerm)
//}
//)
//console.log(filterStreamer);
//}
//)

const text = document.querySelector(".inputStreamers")

text.addEventListener("input", function() {
const searchTerm = text.value;

const filterStreamer = streamers.filter((nuevos) => {
    return nuevos.name.includes(searchTerm)
}
)
console.log(filterStreamer);
}
)