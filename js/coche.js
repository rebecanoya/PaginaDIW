const canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext("2d");
let estadoI = false;
let estadoD = false;
let estadoSOS = false;
let intervaloDerecho;
let intervaloIzquierdo;
let intervaloSOS;
function dibujarCuadrado(a, b, c, d, colorRelleno = "white", anchoBorde = 0, colorBorde = "black") {


    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = anchoBorde;
    ctx.fillStyle = colorRelleno;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.lineTo(a.x, a.y);
    ctx.fill();
    if (anchoBorde > 0) { ctx.stroke(); }

    ctx.closePath();

}

dibujarCuadrado(

    { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
    { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
    { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
    { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
    "white", 2


);

dibujarCuadrado(

    { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
    { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
    { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
    { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
    "white", 2


);

const intI = document.getElementById("intI");
const sos = document.getElementById("sos");
const intD = document.getElementById("intD");

intI.addEventListener("click", () => {


    console.log("izquierdo");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(intervaloDerecho);
    clearInterval(intervaloIzquierdo);
    clearInterval(intervaloSOS);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCuadrado(

        { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
        { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
        { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
        { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
        "white", 2


    );

    dibujarCuadrado(

        { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
        { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
        { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
        { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
        "white", 2


    );



    intervaloIzquierdo = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);


        if (estadoI) {
            estadoI = false
            dibujarCuadrado(

                { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "white", 2


            );
        } else {

            estadoI = true
            dibujarCuadrado(

                { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "yellow", 2


            );
        }
        console.log(estadoI);

    },
        1 * 1000
    )
});

sos.addEventListener("click", () => {
    console.log("sos");

    clearInterval(intervaloDerecho);
    clearInterval(intervaloIzquierdo);
    clearInterval(intervaloSOS);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCuadrado(

        { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
        { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
        { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
        { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
        "white", 2


    );

    dibujarCuadrado(

        { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
        { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
        { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
        { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
        "white", 2


    );
    intervaloSOS = setInterval(() => {

        if (estadoSOS) {
            estadoSOS = false
            dibujarCuadrado(

                { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "white", 2


            );

            dibujarCuadrado(

                { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "white", 2


            );
        } else {
            dibujarCuadrado(

                { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "red", 2


            );

            dibujarCuadrado(

                { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "red", 2


            );
            estadoSOS = true


        }
    },
        0.5 * 1000
    )

});

intD.addEventListener("click", () => {
    clearInterval(intervaloDerecho);
    clearInterval(intervaloIzquierdo);
    clearInterval(intervaloSOS);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCuadrado(

        { x: canvas.width / 5, y: canvas.height / 5 }, //arriba izq
        { x: canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
        { x: canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
        { x: canvas.width / 5, y: canvas.height / 3 }, // abajo izq
        "white", 2


    );

    dibujarCuadrado(

        { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
        { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
        { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
        { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
        "white", 2


    );

    console.log("derecho");
    intervaloDerecho = setInterval(() => {
        ctx.clearRect(canvas.width, canvas.height, canvas.width / 4, canvas.height / 4);
        if (estadoD) {
            estadoD = false
            dibujarCuadrado(

                { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "white", 2


            );
        } else {

            estadoD = true
            dibujarCuadrado(

                { x: canvas.width - canvas.width / 5, y: canvas.height / 5 }, //arriba izq
                { x: canvas.width - canvas.width / 3, y: canvas.height / 5 }, //arriba dcha
                { x: canvas.width - canvas.width / 3, y: canvas.height / 3 }, //abajo dcha
                { x: canvas.width - canvas.width / 5, y: canvas.height / 3 }, // abajo izq
                "yellow", 2


            );
        }
        console.log(estadoD);

    },
        1 * 1000
    )
});
