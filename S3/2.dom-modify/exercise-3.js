const cuerpo = document.querySelector("body")
const newDiv = document.createElement("div")
for (let index = 0; index <= 6; index++) {
    const newP = document.createElement("p")
    newP.textContent = "parrafos" +index;
    newDiv.appendChild(newP)
    
}
cuerpo.appendChild(newDiv)
