describe('spiralDancer', function() {

  var spiralDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spiralDancer = new MakeSpiralDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spiralDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(spiralDancer.$node, 'toggle');
    spiralDancer.step();
    expect(spiralDancer.$node.toggle.called).to.be.true;
  });
  console.log('this is where we are at');
  describe('dance', function() {
    it('should call setPosition at least once per second', function() {
      sinon.spy(spiralDancer, 'step');
      expect(spiralDancer.setPosition.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spiralDancer.setPosition.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spiralDancer.setPosition.callCount).to.be.equal(2);
    });
  });
});