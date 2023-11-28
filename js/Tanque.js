const canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 800;
const ctx = canvas.getContext("2d");

class Bala {

    posicion;
    direccion;
    longitud;
    velocidad;

    constructor(posicion, direccion, longitud, velocidad) {

        this.posicion = posicion;
        this.direccion = direccion;
        this.longitud = longitud;
        this.velocidad = velocidad;

    }

    update() {

        this.posicion.x += this.direccion.x * this.velocidad;
        this.posicion.y += this.direccion.y * this.velocidad;
        let final = {
            x: this.posicion.x - this.direccion.x * this.longitud,
            y: this.posicion.y - this.direccion.y * this.longitud
        }
        dibujarRecta(this.posicion, final, "black", 5, "black");
    };

}

const balas = [];

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

let angulo = 0;
let canhon = {
    x: 0,
    y: 0
};
let largoCanhon = 110;
const torreta = {
    x: (canvas.width / 4) + 10,
    y: (canvas.height / 2) + 65
};


function update() {



    canhon.y = Math.sin(grados_radianes(angulo));
    canhon.x = Math.cos(grados_radianes(angulo));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCuadrado(

        { x: (canvas.width / 4) - 100, y: (canvas.height / 2) },
        { x: (canvas.width / 4) + 100, y: (canvas.height / 2) },
        { x: (canvas.width / 4) + 100, y: (canvas.height / 2 + 30) },
        { x: (canvas.width / 4) - 100, y: (canvas.height / 2 + 30) },
        "green"
    )
    dibujarCuadrado(

        { x: (canvas.width / 4) - 80, y: (canvas.height / 2 + 30) },
        { x: (canvas.width / 4) + 80, y: (canvas.height / 2 + 30) },
        { x: (canvas.width / 4) + 80, y: (canvas.height / 2 + 100) },
        { x: (canvas.width / 4) - 80, y: (canvas.height / 2 + 100) },
        "green"
    )
    dibujarCuadrado(

        { x: (canvas.width / 4) + 100, y: (canvas.height / 2 + 100) },
        { x: (canvas.width / 4) - 100, y: (canvas.height / 2 + 100) },
        { x: (canvas.width / 4) - 100, y: (canvas.height / 2 + 130) },
        { x: (canvas.width / 4) + 100, y: (canvas.height / 2 + 130) },
        "green"
    )

    dibujarCirculo((canvas.width / 4) + 10, (canvas.height / 2) + 65, 30, "brown", 0)
    dibujarRecta(

        torreta,
        { x: torreta.x + largoCanhon * canhon.x, y: torreta.y + largoCanhon * canhon.y }, "brown", 10, "brown"
    )



    balas.forEach((bala) => {
        bala.update();

    })
}

document.addEventListener('keypress', (e) => {
    console.log(e);
    e.preventDefault();
    if (e.key == "w" || e.code == "KeyW") {
        angulo--;


    } else if (e.key == "s" || e.code == "KeyS") {
        angulo++;
    }

    if (e.code == "Space") {
        balas.push(new Bala({ x: torreta.x + largoCanhon * canhon.x, y: torreta.y + largoCanhon * canhon.y },
            { x: canhon.x, y: canhon.y }, 10, 5));





    }

}

);

function grados_radianes(grados) {

    return grados * Math.PI / 180;


}


setInterval(update, 1 / 60 * 1000);