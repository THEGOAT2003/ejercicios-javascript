const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
const finalAnswers = callback(description);
userAnwsers.push(finalAnswers);
}

father("Bienvenido", confirmExample);
father("Usuario:", promptExample);

console.log(userAnwsers);

