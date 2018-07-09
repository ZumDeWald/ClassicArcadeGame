// Enemies our player must avoid
const Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.dt;
    if (this.x >= 510) {
      this.x = -100;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
  this.sprite = 'images/char-cat-girl.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function (dt) {
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(e) {
  if ((e === 'left') && (this.x <= 0)) {
    return;
  } else if ((e === 'up') && (this.y <= 100)) {
    this.y = 400;
    return;
  } else if ((e === 'right') && (this.x >= 400)) {
    return;
  } else if ((e === 'down') && (this.y >= 400)) {
    return;
  } else {

  switch (e){
    case 'left': this.x = this.x - 100;
    break;

    case 'up': this.y = this.y - 83;
    break;

    case 'right': this.x = this.x + 100;
    break;

    case 'down': this.y = this.y + 83;
    break;
  }
}


};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//Enemies
const inky = new Enemy();
const blinky = new Enemy();
const pinky = new Enemy();
const clyde = new Enemy();

let allEnemies = [inky, blinky, pinky, clyde];

//Set Enemy to specific 'lane'
inky.y = 65;
blinky.y = 145;
pinky.y = 65;
clyde.y = 225;

//Set Enemy Speeds
inky.dt = 2;
blinky.dt = 1;
pinky.dt = 0.5;
clyde.dt = 3;



//Player
const player = new Player();


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
