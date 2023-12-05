const canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");
const diferencia = 120;
var tiempo = 0;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dibujarCirculo(canvas.width / 2, canvas.height / 2, 200);
    dibujarCirculo((canvas.width / 2) - diferencia * Math.cos(tiempo), (canvas.height / 2) + diferencia * Math.sin(tiempo), 80)
    tiempo += 0.05;

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


setInterval(update, (1 / 60) * 1000);