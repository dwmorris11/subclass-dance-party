var lineUp = function () {
  // for each element in window.dancers, change left property to 100
  for (let i = 0; i < window.dancers.length; i++) {
    console.log(window.dancers[i]);
    // debugger;
    MakeDancer.prototype.setPosition.call(window.dancers[i], window.dancers[i].top, 100);
  }
};

var randomDance = function () {
  for(let i = 0; i < window.dancers.length; i++) {
    console.log(window.dancers[i]);
    var topRandomPos = Math.floor(Math.random() * 500);
    var leftRandomPos = Math.floor(Math.random() * 900);
    MakeDancer.prototype.setPosition.call(window.dancers[i], topRandomPos, leftRandomPos);
  }
};