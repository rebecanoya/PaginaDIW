const canvas = document.getElementById("canvas");
canvas.width = 200;
canvas.height = 300;
const ctx = canvas.getContext("2d");
const radio = 30;

function dibujarCirculo(x, y, radio, colorRelleno = "white") {


    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();


}

function dibujarArco(x, y, radio, angulo, colorRelleno = "white") {


    ctx.strokeStyle = colorRelleno;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, angulo);
    ctx.stroke();
    ctx.closePath();


}

function dibujarRecta(xa, ya, xb, yb, colorRelleno = "white") {

    ctx.strokeStyle = colorRelleno;
    ctx.beginPath();
    ctx.moveTo(xa, ya);
    ctx.lineTo(xb, yb);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

}

document.addEventListener('keypress', (e) => {

    e.preventDefault();
    if (e.key == 32 || e.code == "Space") {
        console.log("Has pulsado la tecla de espacio");
        brazosSubidos = !brazosSubidos;
        dibujar();

    }

})

var brazosSubidos = false;

function dibujar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    dibujarCirculo(100, 50, radio);
    dibujarCirculo(90, 45, 3, "red");
    dibujarCirculo(110, 45, 3, "red");
    dibujarRecta(100, 80, 100, 200);
    dibujarRecta(100, 200, 130, 250);
    dibujarRecta(100, 200, 70, 250);

    if (brazosSubidos) {

        dibujarCirculo(100, 50, 5, "#c00");
        dibujarRecta(100, 100, 130, 80);
        dibujarRecta(100, 100, 70, 80);

    } else {

        dibujarRecta(100, 100, 130, 150);
        dibujarRecta(100, 100, 70, 150);
        dibujarArco(100, 50, 5, Math.PI, "#c00");

    }

}

dibujar();





