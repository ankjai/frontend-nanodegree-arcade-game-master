var c = document.querySelector("#canvas");
var ctx = c.getContext("2d");

function draw(src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    // body...
    var image = new Image();
    image.src = src;
    image.onload = function() {
        // body...
        ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
}

function drawGameScreen() {
    // body...
    var grassSrc = "images/grass-block.png";
    var stoneSrc = "images/stone-block.png";
    var waterSrc = "images/water-block.png";

    var sx = 0;
    var sy = 51;
    var sWidth = 101;
    var sHeight = 80;
    var dWidth = 101;
    var dHeight = 80;
    for (var dx = 0; dx < 6; dx++) {
        for (var dy = 0; dy < 7; dy++) {
            var src = "";
            if (dy == 0) {
                src = waterSrc;
            } else if (dy == 1 || dy < 4) {
                src = stoneSrc;
            } else if (dy == 4 || dy < 7) {
                src = grassSrc;
            };
            draw(src, sx, sy, sWidth, sHeight, (dx * 101), (dy * 80), dWidth, dHeight);
        }
    }
}

drawGameScreen();
