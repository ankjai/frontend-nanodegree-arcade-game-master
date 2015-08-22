var c = document.querySelector("#canvas");
var ctx = c.getContext("2d");

function draw(src, x, y) {
    // body...
    var image = new Image();
    image.src = src;
    image.onload = function() {
        // body...
        ctx.drawImage(image, (x * 101), (y * 171));
    }
}

function drawGameScreen() {
    // body...
    var grassSrc = "images/grass-block.png";
    var stoneSrc = "images/stone-block.png";
    var waterSrc = "images/water-block.png";
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 7; y++) {
            var src = "";
            if (y == 0) {
                src = waterSrc;
            } else if (y == 1 || y < 4) {
                src = stoneSrc;
            } else if (y == 4 || y < 7) {
                src = grassSrc;
            };
            draw(src, x, y);
        }
    }
}

drawGameScreen();
