const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let age = ages.filter(number => {
    if (number > 18){
        return number
    }
}
) 

// y elimina los que no cumplen
console.log(age);