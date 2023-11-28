const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");
const bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    vlx: -5,
    vly: -5
};
const alturaRaqueta = 550;
const aceleracion = 1.001;
var contador = 0;
function dibujarRecta(a, b, colorRelleno = "white", anchoBorde = 2, colorBorde = "black") {


    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.fill();
    if (anchoBorde > 0) { ctx.stroke(); }

    ctx.closePath();

}

document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.code == "ArrowLeft") {
        console.log("Pulsaste el cursor izquierdo");
        if (posicionRaqueta > 0) {
            posicionRaqueta -= velocidadRaqueta;

        }

    }
    if (e.code == "ArrowRight") {
        console.log("Pulsaste el cursor derecho");
        if (posicionRaqueta < canvas.width - anchoRaqueta) {

            posicionRaqueta += velocidadRaqueta;
        }

    }
});

const tamanhoImagen = 24;
const bolaBal = new Image();
bolaBal.src = "imagenes/bolaBaloncesto.png";
var intervalo;
bolaBal.onload = () => {
    intervalo = setInterval(update, (1 / 60) * 1000);
}
function dibujarBola(x, y) {

    ctx.drawImage(bolaBal, 0, 0, bolaBal.width, bolaBal.height, x, y, tamanhoImagen, tamanhoImagen);


}

const anchoRaqueta = 80;
var posicionRaqueta = (canvas.width / 2) - anchoRaqueta / 2;
const velocidadRaqueta = 10;
function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarRecta(

        { x: posicionRaqueta, y: alturaRaqueta },
        { x: anchoRaqueta + posicionRaqueta, y: alturaRaqueta },
        "black",
        8
    )

    dibujarRecta(

        { x: 0, y: canvas.height - 10 },
        { x: canvas.width, y: canvas.height - 10 },
        "red",
        30,
        "red"
    )

    mover();
    dibujarBola(bola.x, bola.y);

    ctx.font = "25px sans-serif";
    ctx.fillText("Contador: " + contador, canvas.width / 30, canvas.height / 10);



}

function mover() {

    if (bola.x + bola.vlx < 0) {
        bola.vlx = -bola.vlx;
    } else if (bola.x + bola.vlx + tamanhoImagen > canvas.width) {
        bola.vlx = -bola.vlx;
    }
    if (bola.y + bola.vly < 0) {
        bola.vly = -bola.vly;
    } else if (bola.y + bola.vly + tamanhoImagen > canvas.height) {
        clearInterval(intervalo);
        if (window.confirm("Quieres volver a jugar?")) {
            location.reload();
        }
    }


    if ((alturaRaqueta - tamanhoImagen) <= bola.y + bola.vly && bola.y + bola.vly <= alturaRaqueta) {


        if ((posicionRaqueta + anchoRaqueta) >= bola.x + bola.vlx && (posicionRaqueta - tamanhoImagen) <= bola.x + bola.vlx) {

            bola.vly = -bola.vly;
            contador++;
            console.log(contador);
        }

    }


    bola.vlx *= aceleracion;
    bola.vly *= aceleracion;

    bola.x += bola.vlx;
    bola.y += bola.vly;


}
