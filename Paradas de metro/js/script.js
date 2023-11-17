const imagenes = ["alexanderplatz.jpeg", "hermannplatz.jpeg", "jungfernheide.jpeg",
    "konstanzer.jpeg", "kurfurstenstrabe.jpeg", "paulsternstrasse.jpeg",
    "unterdenlinden.jpeg", "westhafen.jpeg"];



const main = document.getElementById("main");
const info = document.getElementById("info");


function showImages(img) {
    let pos = Math.floor(Math.random() * imagenes.length);
    let infotxt = img.src = "imagenes/" + imagenes[pos];


    let inicio = infotxt.indexOf("/") + 1
    let final = infotxt.indexOf(".", inicio) - 1
    let cadena = infotxt.substring(inicio, final + 1);
    info.textContent = cadena;
}

main.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        showImages(event.target)
    }
})


let aumentar = document.getElementById("aumentar");
let disminuir = document.getElementById("disminuir")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")
let aumentarcantidad = 200;

function tamaño() {
    img1.style.width = aumentarcantidad + "px";
    img2.style.width = aumentarcantidad + "px";
    img3.style.width = aumentarcantidad + "px";
    img4.style.width = aumentarcantidad + "px";
    img5.style.width = aumentarcantidad + "px";
    img6.style.width = aumentarcantidad + "px";
    img7.style.width = aumentarcantidad + "px";
    img8.style.width = aumentarcantidad + "px";
}


function aumentartamaño() {
    
    aumentarcantidad += 10;
    tamaño();
}

function dismininuirtamaño() {
    
    aumentarcantidad -= 10;
    tamaño();
}
disminuir.addEventListener("click", dismininuirtamaño);
aumentar.addEventListener("click", aumentartamaño);


