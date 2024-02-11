const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let index = 0; index < placesToTravel.length; index++) {
    const countries = placesToTravel[index];
    
    if (countries.id == 11) {
        placesToTravel.splice(1, 1,);
    }
    if (countries.id == 40) {
        placesToTravel.splice(3, 1,);
    }
}
console.log(placesToTravel);