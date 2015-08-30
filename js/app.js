// Enemies our player must avoid
var Enemy = function(row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // column will always be first
    this.x = -10;
    // row where we want to place the enemy
    this.y = (row * 83) - 23;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    console.log("Enemy.render()");
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

var enOne = new Enemy(1);
console.log("enOne x: " + enOne.x);
console.log("enOne y: " + enOne.y);
console.log("enOne image: " + enOne.sprite);
allEnemies.push(enOne);

var enTwo = new Enemy(2);
console.log("enOne x: " + enTwo.x);
console.log("enOne y: " + enTwo.y);
console.log("enOne image: " + enTwo.sprite);
allEnemies.push(enTwo);

var enThree = new Enemy(3);
console.log("enOne x: " + enThree.x);
console.log("enOne y: " + enThree.y);
console.log("enOne image: " + enThree.sprite);
allEnemies.push(enThree);

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
