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

    var gameScreen = new Image();

    var grassSrc = "images/grass-block.png";
    var stoneSrc = "images/stone-block.png";
    var waterSrc = "images/water-block.png";

    for (var dy = 0; dy < 6; dy++) {
        for (var dx = 0; dx < 5; dx++) {
        	gameScreen.src = grassSrc;
            ctx.drawImage(gameScreen, (dx * 101), (dy * 80));
        }
    }

    ctx.restore();
}

init();
