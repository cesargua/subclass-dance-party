var SizeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 75);
};

SizeDancer.prototype = Object.create(Dancer.prototype);
SizeDancer.prototype.constructor = SizeDancer;

SizeDancer.prototype.step = function() {
  //we may have to use .apply or .call
  Dancer.prototype.step.call(this);
  var num = Math.random() * (40 - 15) + 15;
  this.adjustSize(num);
};

SizeDancer.prototype.adjustSize = function(num) {
  var sizeSettings = {
    'border': num + 'px solid green',
    'border-radius': num + 'px',
    'position': 'absolute'
  };
  this.$node.css(sizeSettings);
};