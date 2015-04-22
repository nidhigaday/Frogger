// Enemies our player must avoid
var Enemy = function(locY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 20;         // setting the Enemy initial location
    this.y = locY * 88;
    this.speed = this.getspeed();          // setting the Enemy speed
    return this;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed*dt);  // movement compatibility
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.getspeed = function() {
    var random = Math.random() + 0.5;
    if (Math.floor(random) < 1) {
        this.speed = 2.5;
    } else {
        this.speed = 5;
    }
    return this.speed;
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(locx, locy){
    this.sprite = 'images/char-horn-girl.png';  //setting Player's image
    // setting up player's initial location
    this.x = locx;
    this.y = locy;
    // setting up movement
    this.moveX = 0;
    this.moveY = 0;
    return this;
};

Player.prototype.update = function(){
     // moving player in the direction button is pressed
        if (this.x + this.moveX > 0 && this.x + this.moveX < 500) {
           this.x += this.moveX;
        } else {
           this.x = 0;
        }
        if (this.y + this.moveY > 0 && this.y + this.moveY < 500) {
           this.y += this.moveY;
        } else {
           this.y = 0;
        }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys){
    var initialX = x, initialY = y;
    if(allowedKeys === '37')
    {
        initialX = initialX--;
    }
    else if (allowedKeys === '38')
    {
        initialY = initialY++;
    }
    else if (allowedKeys === '39')
    {
        initialX = initialX++;
    }
    else if (allowedKeys === '40')
    {
        initialY = initialY--;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var totalEnemies = 5;
var allEnemies = [];

for (var i = 0; i < totalEnemies; i++) {
    allEnemies.push(new Enemy(i));
}

var player = new Player(200, 600);

function gameStart(){
    allEnemies.push(new Enemy());
    player = new Player();
}

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
