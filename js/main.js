function init() {
    // body...
    console.log("init...");
    requestAnimationFrame(draw);
}

function draw() {
    console.log("draw...");
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, c.width, c.height); // clear canvas

    // keyboard events
    processInput();

    // move bugs and player
    moveObjectsAndEnemies();

    // drawAllTheThings
    drawGameScreen(ctx);

    requestAnimationFrame(draw);
}

function processInput() {
    // body...
    console.log("processInput...")
}

function moveObjectsAndEnemies() {
    // body...
    console.log("moveObjectsAndEnemies...")
}

function drawGameScreen(ctx) {
    console.log("drawGameScreen...")

    var water = new Image();
    water.src = "images/water-block.png";

    var stone = new Image();
    stone.src = "images/stone-block.png";

    var grass = new Image();
    grass.src = "images/grass-block.png";

    for (var dy = 0; dy < 6; dy++) {
        for (var dx = 0; dx < 5; dx++) {
            if (dy == 0) {
                ctx.drawImage(water, (dx * 101), (dy * 80));
            } else if (dy > 0 && dy < 4) {
                ctx.drawImage(stone, (dx * 101), (dy * 80));
            } else if (dy >= 4) {
                ctx.drawImage(grass, (dx * 101), (dy * 80));
            };
            // gameScreen.onload = function() {
            //     // body...
            //     ctx.drawImage(gameScreen, (dx * 101), (dy * 80));
            // }
        }
    }
}

init();
