const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

const nuevoArray = movies.find((pelicula) => {
if (pelicula.date == 2010){
    return pelicula
}
}
)
console.log(nuevoArray);