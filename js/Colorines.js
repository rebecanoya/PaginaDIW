const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");

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

function generarRandom(numero) {

    return Math.round(Math.random() * numero);

}

function generarColor() {


    return `rgba(${generarRandom(255)},${generarRandom(255)},${generarRandom(255)},${0.5})`;


}

function update() {

    for (let i = 0; i < 6; i++) {

        dibujarCuadradoRedondo(
            {
                x: canvas.width / 7 * i,
                y: canvas.height / 7 * i,
            },
            canvas.width / 7 * 2,
            canvas.height / 7 * 2,
            0,
            generarColor()
        )

    }


}

var boton1 = document.createElement("input");
boton1.type = "button";
boton1.value = "Cesar";
boton1.addEventListener("click", () => {

    clearInterval(intervalo);

});
document.body.appendChild(boton1);
boton1.style.width = "150px";
boton1.style.height = "50px";

var boton2 = document.createElement("input");
boton2.type = "button";
boton2.value = "Relanzar";
boton2.addEventListener("click", () => {

    intervalo = setInterval(update, slider.value * 1000);

});
document.body.appendChild(boton2);
boton2.style.width = "150px";
boton2.style.height = "50px";

var intervalo;
var slider = document.createElement("input");
slider.type = "range";
slider.min = 1;
slider.max = 10;
slider.value = 1;
slider.addEventListener("change", () => {
    clearInterval(intervalo);
    intervalo = setInterval(update, slider.value * 1000)


});

document.body.appendChild(slider);

update();
intervalo = setInterval(update, slider.value * 1000);
console.log(slider);