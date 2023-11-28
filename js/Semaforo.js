const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");
var estado = 0;
var guardarTO;

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

}

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

function dibujar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarRecta(

        { x: canvas.width / 2, y: 500 },
        { x: canvas.width / 2, y: 400 },
        "black",
        25
    )

    dibujarCuadradoRedondo(

        { x: (canvas.width / 2) - 50, y: 190 }, 100, 220, 20,
        "black"
    )

    dibujarCirculo(canvas.width / 2, 240, 25, "rgb(86, 48, 48)")
    dibujarCirculo(canvas.width / 2, 300, 25, "rgb(85, 86, 48)")
    dibujarCirculo(canvas.width / 2, 360, 25, "rgb(48, 86, 52)")
    switch (estado) {
        case 0:
            dibujarCirculo(canvas.width / 2, 360, 25, "green")
            guardarTO = setTimeout(dibujar, 5 * 1000);
            cambiarEstado();

            break;
        case 1:

            dibujarCirculo(canvas.width / 2, 300, 25, "yellow")
            guardarTO = setTimeout(dibujar, 2 * 1000);
            cambiarEstado();

            break;
        case 2:
            dibujarCirculo(canvas.width / 2, 240, 25, "red")
            guardarTO = setTimeout(dibujar, 5 * 1000);
            cambiarEstado();

            break;

        case 3:
            dibujarCirculo(canvas.width / 2, 300, 25, "yellow")
            guardarTO = setTimeout(dibujar, 0.5 * 1000);
            estado = 4;
            break;
        case 4:
            guardarTO = setTimeout(dibujar, 0.5 * 1000);
            estado = 3;
        default:
            break;
    }




}

function cambiarEstado() {
    if (estado >= 2) {
        estado = 0;
    } else {
        estado++;
    }
};

var boton = document.createElement("input");
boton.type = "button";
boton.value = "Precaución";
boton.addEventListener("click", () => {

    clearTimeout(guardarTO);
    if (estado <= 2) {
        estado = 3;


    } else {

        estado = 0;

    }
    dibujar();

});
document.body.appendChild(boton);
boton.style.width = "150px";
boton.style.height = "50px";
dibujar();