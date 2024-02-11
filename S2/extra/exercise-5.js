function rollDice(numCaras) {
    // Verifica que el número de caras sea un número positivo
    if (typeof numCaras !== 'number' || numCaras <= 0) {
      console.log('Por favor, proporciona un número positivo de caras para el dado.');
      return;
    }
  
    // Simula la tirada de dado
    const resultado = Math.floor(Math.random() * numCaras) + 1;
    
    return resultado;
  }
  
  // Ejemplos de uso
  const carasDado6 = 6;
  const resultadoTirada = rollDice(carasDado6);
  
  if (resultadoTirada !== undefined) {
    console.log(`Resultado de la tirada: ${resultadoTirada}`);}