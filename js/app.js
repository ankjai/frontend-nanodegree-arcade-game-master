// Enemies our player must avoid
var Enemy = function(row, speedFactor) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // column will always be first
    this.x = -100;
    // row where we want to place the enemy
    this.y = (row * 83) - 23;

    // set speedFactor
    this.speedFactor = speedFactor;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var x = this.x;
    if (x > 505) {
        this.x = -100;
    } else {
        this.x = x + this.speedFactor;
    };
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // body...
    this.sprite = 'images/char-boy.png';

    // x reset pt
    this.xResetPt = 2 * 101;

    // y reset pt
    this.yResetPt = (5 * 83) - 23;

    // column will always be first
    this.x = this.xResetPt;

    // row where we want to place the enemy
    this.y = this.yResetPt;
}

Player.prototype.update = function() {
    // body...
}

Player.prototype.render = function() {
    // body...
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(allowedKeys) {
    // body...
    if (allowedKeys == "up") {
        if (this.y > 142) {
            this.y = this.y - 83;
        } else if (this.y == 60) {
            this.x = this.xResetPt;
            this.y = this.yResetPt;
        };;
    };

    if (allowedKeys == "down") {
        if (this.y < 310) {
            this.y = this.y + 83;
        };
    };

    if (allowedKeys == "left") {
        if (this.x > 100) {
            this.x = this.x - 101;
        };
    };

    if (allowedKeys == "right") {
        if (this.x < 304) {
            this.x = this.x + 101;
        };
    };
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

function createEnemies(delay, row, speedFactor) {
    // body...
    setTimeout(function() {
        // body...
        allEnemies.push(new Enemy(row, speedFactor));
    }, delay);
}

createEnemies(0, 1, 1);
createEnemies(2000, 2, 2);
createEnemies(4000, 3, 1);
createEnemies(6000, 1, 3);

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
