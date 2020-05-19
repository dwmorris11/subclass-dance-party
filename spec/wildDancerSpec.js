describe('wildDancer', function() {

  var wildDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wildDancer = new MakeWildDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wildDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(wildDancer.$node, 'toggle');
    wildDancer.setPosition();
    expect(wildDancer.$node.toggle.called).to.be.true;
  });
  console.log('this is where we are at');
  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wildDancer, 'setPosition');
      expect(wildDancer.setPosition.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wildDancer.setPosition.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wildDancer.setPosition.callCount).to.be.equal(2);
    });
  });
});