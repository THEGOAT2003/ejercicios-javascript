function findArrayIndex(array, texto) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === texto) {
        return i; 
      }
    }
    return "no se ha encontrado"; 
  }
  
  function removeItem(array, texto){
    insectos.splice(0, 1);
  }

  let insectos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
  
  let posicion = findArrayIndex(insectos, 'Caracol');
  console.log(posicion);

  console.log(insectos);