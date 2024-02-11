const numbersList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(1, 3, sum);
father(10, 7, subtract);
father(10, 10, subtract);
father(10, 9, subtract);
father(5, 20, sum);

console.log(numbersList);  