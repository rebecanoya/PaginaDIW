const canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");

const intervalo = 1;
const utiempo = 1 / 60;
const tiempoPartida = 10;
var contadorPuntos = 0;
var contadorTiempo = tiempoPartida;
var intervaloCambiarPosicion;
var intervaloUpdate;

const vox = {
    x: 0,
    y: 0,
    ancho: 0,
    alto: 0,
    imagen: new Image(),
    sinClick: true
};
vox.imagen.src = "../img/ignacio.png";
vox.imagen.onload = () => {

    vox.ancho = vox.imagen.width / 5;
    vox.alto = vox.imagen.height / 5;
};

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(vox.imagen, vox.x, vox.y, vox.ancho, vox.alto);
    ctx.font = "25px sans-serif";
    ctx.fillText("Contador: " + contadorPuntos, canvas.width / 30, canvas.height / 10);
    ctx.fillText("Tiempo: " + Math.round(contadorTiempo), canvas.width - 150, canvas.height / 10);
    contadorTiempo -= utiempo;
}

intervaloUpdate = setInterval(update, utiempo * 1000);

intervaloCambiarPosicion = setInterval(() => {

    vox.x = Math.random() * (canvas.width - vox.ancho)
    vox.y = Math.random() * (canvas.height - vox.alto);
    vox.sinClick = true;

}, intervalo * 1000);

setTimeout(() => {

    clearInterval(intervaloCambiarPosicion);
    clearInterval(intervaloUpdate);

}, tiempoPartida * 1000);

canvas.addEventListener("click", (e) => {

    const { left, top } = canvas.getBoundingClientRect();
    var x = e.clientX - left;
    var y = e.clientY - top;

    if (vox.x <= x && vox.x + vox.ancho >= x && vox.y <= y && vox.y + vox.alto >= y && vox.sinClick) {

        contadorPuntos++;
        vox.sinClick = false;
    }



});