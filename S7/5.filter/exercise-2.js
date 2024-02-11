const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let newAges = ages.filter(number => {
if (number % 2 == 0) {
    return number
}

}
)
console.log(newAges);
// si el multiplo de 2 es = 0, me los mestras en concola en el nuevo array creado