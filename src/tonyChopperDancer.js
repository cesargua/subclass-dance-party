var TonyChopperDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 0);
  this.left = left;
  this.top=top;
}

TonyChopperDancer.prototype = Object.create(Dancer.prototype);
TonyChopperDancer.prototype.constructor = TonyChopperDancer;
TonyChopperDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var left = this.left;
  var top = this.top;
  this.$node.hover({
    function() {
      this.$node // function for when mouseover
    }, function() {
      this.$node // function for when mouseleaves
    }
    // top: '+=10px'
  });
  /*this.$node.animate({
    left: '+=10px',
    top: '+=10px'
  });*/
};


