// function swap(Mesirve, Ronalguiño) {

//    const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

// //    const array2 = []

// //    index1 = array[0]
// //     index2 = array[1]


// return(
//     array.splice(0, 1, "Ronalguiño"),
//     array.splice(3, 1, "Mesirve")

// )





// }

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

array.splice(0, 1, "Ronalguiño")
array.splice(3, 1, "Mesirve")
//console.log(array);


let myArray = [12, -2, 55, 68, 80];

// Store the value at the first position (index 0) in a temporary variable
const temp = myArray[0];

// Replace the value at the first position with the value at the second position
myArray[0] = myArray[1];

// Replace the value at the second position with the value stored in the temporary variable
myArray[1] = temp;

// Output the modified array
//console.log(myArray); // Output: [-2, 12, 55, 68, 80]




const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    //aqui yo hago la funcion swapElements que tiene la funcion de cambiar esas posiciones, por eso abajo la llamo atacando el array que quiero y le meto el cambio entre 0-2
};

let myArray2 = [12, -2, 55, 68, 80];

// Call the swapElements function with the array and indices 0 and 1
swapElements(myArray2, 0, 2);

// Output the modified array
console.log(myArray2); // Output: [-2, 12, 55, 68, 80]