// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  //Generate a random number 1-5
  var randomHead = Math.floor(Math.random() * 5);
  console.log(randomHead);
  //set var id to that number
  //put in the span tag below
  var headName = ['beebs', 'beyonce', 'bbking', 'LBJ', 'susieb'];
  var headContent = [
    `{"content": 'url("images/beebs.jpg")'}`,
    `{"content": 'url("images/beyonce.jpg")'}`,
    `{"content": 'url("images/BBKing.jpg")'}`,
    `{"content": 'url("images/LBJ.jpg")'}`,
    `{"content": 'url("images/SuzieB.jpg")'}`];

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="' + headName[randomHead] + '"></span>');
  // set variable on inline style
  // ('.dancer').style.setProperty(--dancer, 'url("images/beyonce.jpg")');
  $('.' + headName[randomHead]).css(headContent[randomHead]);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  console.log('Class this: ', this);
  this.step();

  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};



