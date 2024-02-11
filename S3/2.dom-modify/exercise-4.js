const cuerpo = document.querySelector("body");
const newP = document.createElement("p")
newP.textContent = 'Soy dinámico!'
//se podria usar .innerHTML
cuerpo.appendChild(newP)