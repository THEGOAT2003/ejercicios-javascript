const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
// Creamos un nuevo array para almacenar las categorías sin repetir
const categoriasSinRepetir = [];

// Iteramos sobre cada película
//for (const pelicula of movies) {
  // Iteramos sobre cada categoría de la película
  //for (const categoria of pelicula.categories) {
    // Verificamos si la categoría ya está en el nuevo array
 //   if (!categoriasSinRepetir.includes(categoria)) {
      // Si no está, la agregamos al nuevo array
      //categoriasSinRepetir.push(categoria);
   // }
  //}
//}


// Imprimimos el nuevo array de categorías sin repetir
//console.log(categoriasSinRepetir);

for (const pelicula of movies) {
    for (const categoria of pelicula.categories) {
    if ( pelicula.categories.includes ('aventura', 'acción')){
        categoriasSinRepetir.push(categoria);
    }
}
}
console.log(categoriasSinRepetir);