var ctx;
var canvas;
var angulo = 0;

window.onload = function () {
    canvas = document.getElementById('canvas');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            dibujarTanque();
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowRight') {
                    angulo += 0.05;
                    dibujarTanque();
                }
                if (e.key == 'ArrowLeft') {
                    console.log('pulsa down');
                    angulo -= 0.05;
                    dibujarTanque();
                }
            });
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function dibujarTanque() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'darkgreen';
    // ruedas de arriba
    ctx.beginPath();
    ctx.fillRect(300, 345, 100, 20);
    ctx.strokeRect(300, 345, 100, 20);
    // ruedas de abajo
    ctx.beginPath();
    ctx.fillRect(300, 395, 100, 20);
    ctx.strokeRect(300, 395, 100, 20);
    // cuerpo tanque
    ctx.beginPath();
    ctx.fillRect(315, 350, 70, 60);
    ctx.strokeRect(315, 350, 70, 60);

    // dibujar cannon
    dibujarLinea(350, 380, 90, angulo);

    // circulo
    ctx.lineWidth = 2;
    ctx.fillStyle = "darkgreen";
    ctx.beginPath();
    ctx.arc(350, 380, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function dibujarLinea(x, y, longitud, angulo) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 15;

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + (Math.cos(angulo) * longitud), y + (Math.sin(angulo) * longitud))
    ctx.stroke()
    ctx.closePath()
}

