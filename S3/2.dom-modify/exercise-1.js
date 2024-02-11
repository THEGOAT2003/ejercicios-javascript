const cuerpo = document.querySelector("body")

const newDiv = document.createElement("div")
newDiv.textContent = "hola buenas"
const newP = document.createElement("p")
newDiv.appendChild(newP)
newP.textContent = "nuevaP"

cuerpo.appendChild(newDiv)