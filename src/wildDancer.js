var MakeSpiralDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSpiralDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpiralDancer.prototype.constructor = MakeSpiralDancer;

MakeSpiralDancer.prototype.setPosition = function (top, left) {
  MakeDancer.prototype.setPosition.call(this, top, left);
  this.$node.toggle();
};