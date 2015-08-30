// Enemies our player must avoid
var Enemy = function(row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // column will always be first
    this.x = -100;
    // row where we want to place the enemy
    this.y = (row * 83) - 23;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var x = this.x;
    if (x == 505) {
        console.warn("x is 505: " + this.x);
        this.x = -100;
        console.log("resetting this.x: " + this.x);
    } else {
        this.x = x + 1;
        console.log("updating this.x: " + this.x);
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
}

Player.prototype.update = function() {
    // body...
    console.log("Player.update()");
}

Player.prototype.render = function() {
    // body...
    console.log("Player.render()");
}

Player.prototype.handleInput = function() {
    // body...
    console.log("Player.handleInput()");
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

function createEnemies(delay, row) {
    // body...
    setTimeout(function() {
        // body...
        allEnemies.push(new Enemy(row));
    }, delay);
}

createEnemies(0, 1);
createEnemies(2000, 2);
createEnemies(4000, 3);
createEnemies(6000, 1);

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
