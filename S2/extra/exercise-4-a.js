function findArrayIndex(array, texto) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === texto) {
        return i;
      }
    }
    return -1;  // Devuelve -1 si el texto no se encuentra en el array
  }
  
  function removeItem(array, texto) {
    const index = findArrayIndex(array, texto);
  
    if (index !== -1) {
      // Utiliza splice para eliminar el elemento del array
      array.splice(index, 1);
      console.log(`Elemento '${texto}' eliminado del array.`);
    } else {
      console.log(`El elemento '${texto}' no se encontró en el array.`);
    }
  
    return array;
  }
  
  let insectos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
  
  let nuevoArray = removeItem(insectos, 'Caracol');
  console.log(nuevoArray);