const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

function dibujarMolinillo(a, b, c, d, colorRelleno = "white", anchoBorde = 0, colorBorde = "black") {


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

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarMolinillo(

        { x: canvas.width / 2, y: 200 },
        { x: canvas.width / 2, y: 350 },
        { x: (canvas.width / 2) + 200, y: 350 },
        { x: canvas.width / 2, y: 200 },
        generarColor()
    );

    dibujarMolinillo(

        { x: canvas.width / 2, y: 200 },
        { x: (canvas.width / 2) + 200, y: 200 },
        { x: (canvas.width / 2) + 200, y: 50 },
        { x: canvas.width / 2, y: 200 },
        generarColor()
    );

    dibujarMolinillo(

        { x: canvas.width / 2, y: 200 },
        { x: canvas.width / 2, y: 50 },
        { x: (canvas.width / 2) - 200, y: 50 },
        { x: canvas.width / 2, y: 200 },
        generarColor()
    );

    dibujarMolinillo(

        { x: canvas.width / 2, y: 200 },
        { x: (canvas.width / 2) - 200, y: 350 },
        { x: (canvas.width / 2) - 200, y: 200 },
        { x: canvas.width / 2, y: 200 },
        generarColor()
    );

    dibujarRecta(
        { x: canvas.width / 2, y: 700 },
        { x: canvas.width / 2, y: 200 },
        "pink",
        5,
        "pink"
    )
}

function generarRandom(numero) {

    return Math.round(Math.random() * numero);

}

function generarColor() {


    return `rgb(${generarRandom(100)},${generarRandom(200)},${generarRandom(255)})`;


}

setInterval(update, 1 * 1000);
update();
