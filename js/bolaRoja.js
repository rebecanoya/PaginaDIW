const canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext("2d");
let posicionx = canvas.width / 2;
let posiciony = canvas.height / 2;
let velocidadx = 5;
let velocidady = 1;
const radio = 30;
let parar = false;

function dibujarCirculo(x, y, radio, colorRelleno = "white", anchoBorde = 10, colorBorde = "black") {

    ctx.save();
    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();


}

document.addEventListener('keypress', (e) => {

    e.preventDefault();
    if (e.key == 32 || e.code == "Space") {
        console.log("Has pulsado la tecla de espacio");
        parar = !parar;

    }

})

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCirculo(posicionx, posiciony, radio, "red", 10, "black");


    if (!parar) {
        if (posicionx + velocidadx < 0 + radio) {
            velocidadx = -velocidadx;
        } else if (posicionx + velocidadx > canvas.width - radio) {
            velocidadx = -velocidadx;
        }
        posicionx += velocidadx;

        if (posiciony + velocidady < 0 + radio) {
            velocidady = -velocidady;
        } else if (posiciony + velocidady > canvas.height - radio) {
            velocidady = -velocidady;
        }
        posiciony += velocidady;

    }







};

setInterval(update, (1 / 60) * 1000);