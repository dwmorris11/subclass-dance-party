var lineUp = function () {
  // for each element in window.dancers, change left property to 100
  for (let i = 0; i < window.dancers.length; i++) {
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

var ouch = function () {
  for (let i = 0; i < window.dancers.length-1; i++) {
    var lastDancerTop = window.dancers[window.dancers.length-1].top;
    var currentDancerTop = window.dancers[i].top;
    var lastDancerLeft = window.dancers[window.dancers.length-1].left;
    var currentDancerLeft = window.dancers[i].left;
    if(Math.abs(lastDancerTop - currentDancerTop)  < 80 && Math.abs(lastDancerLeft - currentDancerLeft < 80)) {
      var ouchTop = window.dancers[i].top;
      var ouchLeft = window.dancers[i].left;
      $newNode = $('<span class="ouch"></span>');
      var styleString = String('top: ' + ouchTop + 'px, left: ' + ouchLeft + 'px');
      $newNode.attr('style', styleString);
      $('body').append($newNode);
      $newNode.fadeOut(5000);
    }
  }

};