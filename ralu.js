// Dani Vicario - ralu experiment (canvas)- Tue Jun 18 10:23:47 CEST 2019
const globalCompositeOperationModes = {
    "source-over": "source-over",
    "source-in": "source-in",
    "source-out": "source-out",
    "source-atop": "source-atop",
    "destination-over": "destination-over",
    "destination-in": "destination-in",
    "destination-out": "destination-out",
    "destination-atop": "destination-atop",
    "lighter": "lighter",
    "copy": "copy",
    "xor": "xor",
    "multiply": "multiply",
    "screen": "screen",
    "overlay": "overlay",
    "darken": "darken",
    "lighten": "lighten",
    "color-dodge": "color-dodge",
    "color-burn": "color-burn",
    "hard-light": "hard-light",
    "soft-light": "soft-light",
    "difference": "difference",
    "exclusion": "exclusion",
    "hue": "hue",
    "saturation": "saturation",
    "color": "color",
    "luminosity": "luminosity"
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

function ralucaLine() {
    Array(w).fill().map((x, idx) => (
        {
            x: idx * 25,
            y: 0
        }
    ))
        .forEach(pos => {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 5, 0, PI_DOUBLE);
            ctx.fill();
            ctx.closePath();
        }
        )
}

for( var i = 0, row =0 ; i < h ; i+=25) {
    ctx.save();
    
    (row++ % 2) ? ctx.translate(0, i) : ctx.translate(25/2, i)

    ralucaLine()

    
    ctx.restore();
}
