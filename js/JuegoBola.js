const canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");
const tamanhoImagen = 80;
var bolax1 = 270;
var bolay1 = 180;
var vbolax1 = -5;
var vbolay1 = 3;
var vbolax2 = -6;
var vbolay2 = -4;
var bolax2 = 50;
var bolay2 = 90;

const bolaBal = new Image();
bolaBal.src = "../img/bolaBaloncesto.png";

bolaBal.onload = () => {
    setInterval(update, (1 / 60) * 1000);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rebeccapurple";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    mover();
    dibujarBola(bolax1, bolay1);
    dibujarBola(bolax2, bolay2);

}


function mover() {
    if (Math.sqrt(Math.pow(bolax1 - bolax2, 2) + Math.pow(bolay1 - bolay2, 2)) <= tamanhoImagen) {

        vbolax1 = -vbolax1;
        vbolax2 = -vbolax2;
        vbolay1 = -vbolay1;
        vbolay2 = -vbolay2;

    }
    if (bolax1 + vbolax1 < 0) {
        vbolax1 = -vbolax1;
    } else if (bolax1 + vbolax1 + tamanhoImagen > canvas.width) {
        vbolax1 = -vbolax1;
    }
    if (bolay1 + vbolay1 < 0) {
        vbolay1 = -vbolay1;
    } else if (bolay1 + vbolay1 + tamanhoImagen > canvas.height) {
        vbolay1 = -vbolay1;
    }
    bolax1 += vbolax1;
    bolay1 += vbolay1;
    if (bolax2 + vbolax2 < 0) {
        vbolax2 = -vbolax2;
    } else if (bolax2 + vbolax2 + tamanhoImagen > canvas.width) {
        vbolax2 = -vbolax2;
    }
    if (bolay2 + vbolay2 < 0) {
        vbolay2 = -vbolay2;
    } else if (bolay2 + vbolay2 + tamanhoImagen > canvas.height) {
        vbolay2 = -vbolay2;
    }
    bolax2 += vbolax2;
    bolay2 += vbolay2;



}


function dibujarBola(x, y) {

    ctx.drawImage(bolaBal, 0, 0, bolaBal.width, bolaBal.height, x, y, tamanhoImagen, tamanhoImagen);


}
