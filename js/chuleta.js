const canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");


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

function dibujarCuadrado(a, b, c, d, colorRelleno = "white", anchoBorde = 0, colorBorde = "black") {


    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.fill();
    if (anchoBorde > 0) { ctx.stroke(); }

    ctx.closePath();

}

function dibujarCuadradoRedondo(pos, ancho, alto, radio, colorRelleno = "white", anchoBorde = 0, colorBorde = "black") {


    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.roundRect(pos.x, pos.y, ancho, alto, radio);
    ctx.fill();
    if (anchoBorde > 0) { ctx.stroke(); }

    ctx.closePath();

} // la pos es arriba a la izquierda

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


function dibujarArco(x, y, radio, angulo, colorRelleno = "white") {


    ctx.strokeStyle = colorRelleno;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, angulo);
    ctx.stroke();
    ctx.closePath();


}


function generarRandom(numero) {

    return Math.round(Math.random() * numero);

}

ctx.fillText("Contador: " + contadorPuntos, canvas.width / 30, canvas.height / 10); // escribir texto





