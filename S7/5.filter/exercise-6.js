const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

//const nuevoArray = streamers.filter((x) => { x.gameMorePlayed.toUpperCase
//if (((x.gameMorePlayed.includes('Legends')) && (x.age > 35))){
  //  return x
//}

//console.log(x.gameMorePlayed.toUpperCase);
//}
//)
 //console.log(nuevoArray);



 const nuevoArray = streamers.filter((nuevo) => {
    if (nuevo.gameMorePlayed.includes('Legends')){
        if (nuevo.age > 35){
            nuevo.gameMorePlayed = nuevo.gameMorePlayed.toLocaleUpperCase();
            
        }
        console.log(nuevo);
    }
   
 }
 )
