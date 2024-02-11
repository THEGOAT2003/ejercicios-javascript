/*const variable1 = document.querySelector("button")

const click = document.addEventListener("click", (variable1) => {
fetch("https://api.nationalize.io?name='")
console.log(variable1);
})*/

const baseUrl = 'https://api.nationalize.io?name=';
const click = document.querySelector("input")
const boton = document.querySelector("button")

const getFetch = () => {
    fetch('https://api.nationalize.io?name=', input.value)
    .then((response) => response.json)

.then((resJson) => drawName(resJson))}