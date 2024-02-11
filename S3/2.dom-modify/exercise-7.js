const cuerpo = document.querySelector("body");
let clases = document.querySelectorAll(".fn-remove-me");

for (const iterador of clases) {
    cuerpo.removeChild(iterador)
}