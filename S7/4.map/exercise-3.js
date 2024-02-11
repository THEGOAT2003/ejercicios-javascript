const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let city = cities.map(visited => {
    if (visited.isVisited == true){
        return '(Visitado)'
    }
    else {
        return visited.name
    }

} 
) 

console.log(city);