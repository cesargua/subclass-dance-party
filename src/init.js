// Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.

$(document).ready(function() {
  window.dancers = [];



  $('.lineUpDancersButton').on('click', function(event) {
      //iterate through window.dancers
      //call each dancer's lineUp method

      var left = 100;
      var top = 100;
      // console.log('before for loop');
    window.dancers.forEach(function(dancer,indexNum){
        // dancer.$node.remove();
        // left = dancer.left;
        // top = dancer.top;
        dancer.lineUp(top, left);
        left += 100;
        // $('body').append(dancer.$node);
// left is 10 px farther to the right
    });
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /*
     * dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    //make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node); //array of dancer object
      window.dancers.push(dancer);
  });
});

