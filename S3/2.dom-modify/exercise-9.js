let divs = document.querySelector(".fn-insert-here")

for (let index = 0; index < 2; index++) {
    const newP = document.createElement("p")
    newP.textContent = "Voy dentro!" +index;
    divs.appendChild(newP)   
}

