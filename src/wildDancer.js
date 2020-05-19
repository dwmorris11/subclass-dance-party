var MakeWildDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeWildDancer.prototype = Object.create(MakeDancer.prototype);
MakeWildDancer.prototype.constructor = MakeWildDancer;

MakeWildDancer.prototype.setPosition = function (top, left) {
  //Make a random number between -1 and +1
  //Make a second random number between -1 and +1
  //Calculate a new top position by adding it to the first random number
  //Calculate a new left position by adding it to the second random number
  //if new top exceeds body.height then set new top to body.height
  //if new top is less than zero then set new top to zero
  //if new left exceeds body.width then set new left to body.width
  //if new left is less than zero then set new left to zero
  var min = -100;
  var max = 100;
  var random1 = Math.floor(Math.random()*(max-min)) + min;
  var random2 = Math.floor(Math.random()*(max-min)) + min;
  top = this.top + random1;
  left = this.left + random2;
  if(top > $("body").height()) {
    top = $("body").height();
  }
  if(top < 0) {
    top = 0;
  }
  if(left > $("body").width()) {
    left = $("body").width();
  }
  if(left < 0) {
    left = 0;
  }
  MakeDancer.prototype.setPosition.call(this, top, left);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  MakeDancer.prototype.step.call(this);
  setTimeout(this.setPosition.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
};
