var MakeSpiralDancer = function (top, left, timeBetweenSteps) {
  this.perTop = .3 * $("body").height(); //value is estimated guess
  this.perRight = .95 * $("body").width(); //value is estimated guess
  this.perBottom = $("body").height(); //I think this will be bottom of screen
  this.perLeft = .05 * $("body").width(); //I believe this is a good guess
  top = this.perTop;
  left = this.perLeft;
  this.timeBetweenSteps = 1000;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.spiralizer();
};

MakeSpiralDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpiralDancer.prototype.constructor = MakeSpiralDancer;


MakeSpiralDancer.prototype.moveRight = function (top, right, bottom, left) {
  if(left < right) {
    left += 10;
    this.left = left;
    MakeSpiralDancer.prototype.moveRight.call(this, top, left);
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    setTimeout(this.moveRight.bind(this), this.timeBetweenSteps);
    this.$node.toggle();
  }

};
MakeSpiralDancer.prototype.moveDown = function (top, right, bottom, left) { };
MakeSpiralDancer.prototype.moveLeft = function (top, right, bottom, left) { };
MakeSpiralDancer.prototype.moveUp = function (top, right, bottom, left) { };

MakeSpiralDancer.prototype.spiralizer = function () {
  var moveArguments = [this.perTop, this.perRight, this.perBottom, this.perLeft];
  MakeSpiralDancer.prototype.moveRight.apply(this, moveArguments);
  MakeSpiralDancer.prototype.moveDown.apply(this, moveArguments);
  MakeSpiralDancer.prototype.moveLeft.apply(this, moveArguments);
  this.perTop -= 25;
  this.perRight -= 25;
  this.perLeft += 25;
  this.perBottom += 25;
  MakeSpiralDancer.prototype.moveUp.apply(this, moveArguments);
  //recurse spiralizer
};




//Define: Per-top, Per-right, Per-bottom, Per-left
//set values of the perimeters equal to our extremes on the dance floor
//redefine top to Per-top
//redefine left to Per-left
//Make the dancer
//Use setPosition to move the dancer +left until it reaches Per-right
//Use setPosition to move the dancer -top and +left until it reaches Per-Bottom or Per-left (adjust angle as necessary)
//Use setPosition to move the dancer -left until it reaches Per-left
//redefine Per-top = Per-top - a few pixels
//redefine Per-right = Per-right - a few pixels
//redfine Per-bottom = Per-bottom + a few pixels
//redfine Per-left = Per-left + a few pixels
//Use setPosition to move the dancer -left and +top until it reaches Per-top
//recurse dancer

//When it gets to the middle, delete dancer or reset dancer to the beginning