const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let user = users.map((nombres) => {

if (nombres.name.includes("A")){
    return ('Anacleto');
    
}  
else {
    return nombres.name;
    
}

} 
)   
console.log(user);








    