var ColoredDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, 500);
  this.top = top;
  this.left = left
  this.setColor("#"+Math.floor(Math.random() * 0x1000000).toString(16));
}

ColoredDancer.prototype = Object.create(Dancer.prototype);
ColoredDancer.prototype.constructor = ColoredDancer;

ColoredDancer.prototype.step = function() {
  //   //we may have to use .apply or .call
  //   // this.oldStep;
  Dancer.prototype.step.call(this);
  //this.oldStep();
  //this.$node.toggle();
  //this.setPosition(++this.top,--this.left)
  //Dancer.prototype.step.call(this, 2);
  this.setColor("#"+Math.floor(Math.random() * 0x1000000).toString(16));

};

ColoredDancer.prototype.setColor = function(color){
var coloredSettings = {
  'border':'10px solid ' + color,
  'border-radius': '10px',
  'position':'absolute'
}
  this.$node.css(coloredSettings);
}


// BlinkyDancer.prototype = Object.create(Dancer.prototype);
// BlinkyDancer.prototype.constructor = BlinkyDancer;

// //BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
// BlinkyDancer.prototype.step = function() {
//   //we may have to use .apply or .call
//   // this.oldStep;
//   Dancer.prototype.step.call(this);
//   //this.oldStep();
//   this.$node.slideDown();

// };