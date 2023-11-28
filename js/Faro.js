const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");

function dibujarRecta(a, b, c, d, colorRelleno = "white", anchoBorde = 2, colorBorde = "black") {


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

function dibujarCuadrado(x, y, ancho, alto, colorRelleno = "white", anchoBorde, colorBorde = "black") {

    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.rect(x, y, ancho, alto);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


}



const gradient = ctx.createLinearGradient(195, 150, 550, 150);
gradient.addColorStop(0, "yellow");
gradient.addColorStop(1, "lightyellow");

var encendido = false;

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dibujarCuadrado(50, 540, 200, 20, "black", 2);
    dibujarRecta(

        { x: 65, y: 540 },
        { x: 80, y: 460 },
        { x: 220, y: 460 },
        { x: 235, y: 540 },
        "red"

    );

    dibujarRecta(

        { x: 80, y: 460 },
        { x: 95, y: 380 },
        { x: 205, y: 380 },
        { x: 220, y: 460 },

        "white"

    );

    dibujarRecta(

        { x: 95, y: 380 },
        { x: 110, y: 300 },
        { x: 190, y: 300 },
        { x: 205, y: 380 },

        "red"

    );

    dibujarRecta(

        { x: 110, y: 300 },
        { x: 125, y: 220 },
        { x: 175, y: 220 },
        { x: 190, y: 300 },

        "white"

    );
    dibujarCuadrado(100, 210, 100, 10, "black", 2);
    dibujarRecta(

        { x: 95, y: 150 },
        { x: 150, y: 100 },
        { x: 205, y: 150 },
        { x: 95, y: 150 },


        "black"

    );


    if (encendido) {

        dibujarCuadrado(105, 150, 90, 60, "yellow", 2);

        dibujarRecta(


            { x: 195, y: 150 },
            { x: 195, y: 210 },
            { x: 550, y: 460 },
            { x: 550, y: 150 },


            gradient,
            0,

        );



    } else {
        dibujarCuadrado(105, 150, 90, 60, "white", 2);


    }


    encendido = !encendido;





}

update();
setInterval(update, 2 * 1000);


