
//const nuevaP = document.createElement("p");
//nuevaP.textContent = "Voy en medio!"
//const segundoDiv = document.querySelector(".div2")
//const primerDiv = document.querySelector("div")
//primerDiv.parentNode.insertBefore(nuevaP, segundoDiv)


const nuevaP = document.createElement("p");
nuevaP.textContent = "Voy en medio!"
const Divs = document.querySelector("div")
Divs.insertAdjacentElement("beforeend", nuevaP)