var MakeWildDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeWildDancer.prototype = Object.create(MakeDancer.prototype);
MakeWildDancer.prototype.constructor = MakeWildDancer;

MakeWildDancer.prototype.setPosition = function () {
  MakeDancer.prototype.setPosition.call(this);
  this.$node.toggle();
};