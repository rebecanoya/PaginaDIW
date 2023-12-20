const canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");
let circuloAmarillo = "rgb(252, 252, 135)";
let circuloMagenta = "rgb(255, 67, 202)";
let circuloAzul = "rgb(96, 96, 255)";
let estado = 0;
let turno = 0;


function dibujarCirculo(x, y, radio, colorRelleno = "white", anchoBorde = 10, colorBorde = "black") {

    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();


}

function cambiarEstado() {
    if (estado > 2) {
        estado = 0;
    } else {
        estado++;
    }
};

const main = document.getElementsByClassName("texto")[0];
var boton = document.createElement("input");
boton.type = "button";
boton.value = "Parar";
boton.addEventListener("click", () => {

    clearInterval(colores);

});

main.appendChild(boton);
boton.style.width = "150px";
boton.style.height = "50px";


function update() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (estado) {

        case 0:

            dibujarCirculo(canvas.width / 2, canvas.height / 3, 100, circuloMagenta, 0, "white");
            dibujarCirculo(333, canvas.height / 2, 100, circuloAzul, 0, "white");
            dibujarCirculo(166, canvas.height / 2, 100, circuloAmarillo, 0, "white");
            cambiarEstado();
            break;

        case 1:
            dibujarCirculo(canvas.width / 2, canvas.height / 3, 100, "magenta", 0, "white");
            dibujarCirculo(333, canvas.height / 2, 100, circuloAzul, 0, "white");
            dibujarCirculo(166, canvas.height / 2, 100, circuloAmarillo, 0, "white");
            cambiarEstado();
            break;

        case 2:
            dibujarCirculo(canvas.width / 2, canvas.height / 3, 100, circuloMagenta, 0, "white");
            dibujarCirculo(333, canvas.height / 2, 100, "blue", 0, "white");
            dibujarCirculo(166, canvas.height / 2, 100, circuloAmarillo, 0, "white");
            cambiarEstado();
            break;

        case 3:
            dibujarCirculo(canvas.width / 2, canvas.height / 3, 100, circuloMagenta, 0, "white");
            dibujarCirculo(333, canvas.height / 2, 100, circuloAzul, 0, "white");
            dibujarCirculo(166, canvas.height / 2, 100, "yellow", 0, "white");
            cambiarEstado();
            break;


    }

}

update();
let colores = setInterval(update, 2 * 1000);
