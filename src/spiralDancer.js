var MakeSpiralDancer = function (top, left, timeBetweenSteps) {
  if(top > $("body").height()-110) {
    top = $("body").height()-110;
  }
  if(left > $("body").width()-110) {
    left = $("body").width()-110;
  }
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this['$node'][0].classList.add('spiralDancer');
};

MakeSpiralDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpiralDancer.prototype.constructor = MakeSpiralDancer;


// MakeSpiralDancer.prototype.moveRight = function (top, right, bottom, left) {
// if(left < right) {
// left += 10;
// this.left = left;
// MakeSpiralDancer.prototype.moveRight.call(this, top, left);
// var styleSettings = {
//   top: top,
//   left: left
// };
// this.$node.css(styleSettings);
// setTimeout(this.moveRight.bind(this), this.timeBetweenSteps);
// this.$node.toggle();
// }

// };
// MakeSpiralDancer.prototype.moveDown = function (top, right, bottom, left) { };
// MakeSpiralDancer.prototype.moveLeft = function (top, right, bottom, left) { };
// MakeSpiralDancer.prototype.moveUp = function (top, right, bottom, left) { };

// MakeSpiralDancer.prototype.spiralizer = function () {
// var moveArguments = [this.perTop, this.perRight, this.perBottom, this.perLeft];
// MakeSpiralDancer.prototype.moveRight.apply(this, moveArguments);
// MakeSpiralDancer.prototype.moveDown.apply(this, moveArguments);
// MakeSpiralDancer.prototype.moveLeft.apply(this, moveArguments);
// this.perTop -= 25;
// this.perRight -= 25;
// this.perLeft += 25;
// this.perBottom += 25;
// MakeSpiralDancer.prototype.moveUp.apply(this, moveArguments);
// //recurse spiralizer
// };