$(document).foundation()


$('.slider').each(function() {              // For every slider
    var $this   = $(this);                    // Current slider
    var $group  = $this.find('.slide-group'); // Get the slide-group (container)
    var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
    var buttonArray  = [];                    // Create array to hold navigation buttons
    var currentIndex = 0;                     // Hold index number of the current slide
    var timeout;                              // Sets gap between auto-sliding
  
    function move(newIndex) {          // Creates the slide from old to new one
      var animateLeft, slideLeft;      // Declare variables
  
      advance();                       // When slide moves, call advance() again
  
      // If it is the current slide / animating do nothing
      if ($group.is(':animated') || currentIndex === newIndex) {  
        return;
      }
  
      buttonArray[currentIndex].removeClass('active'); // Remove class from item
      buttonArray[newIndex].addClass('active');        // Add class to new item
  
      if (newIndex > currentIndex) {   // If new item > current
        slideLeft = '100%';            // Sit the new slide to the right
        animateLeft = '-100%';         // Animate the current group to the left
      } else {                         // Otherwise
        slideLeft = '-100%';           // Sit the new slide to the left
        animateLeft = '100%';          // Animate the current group to the right
      }
      // Position new slide to left (if less) or right (if more) of current
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
  
      $group.animate( {left: animateLeft}, function() {    // Animate slides and
        $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
        $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
        $group.css( {left: 0} );               // Set position of group of slides
        currentIndex = newIndex;               // Set currentIndex to the new image
      });
    }
  
    function advance() {                     // Used to set 
      clearTimeout(timeout);                 // Clear previous timeout
      timeout = setTimeout(function() {      // Set new timer
        if (currentIndex < ($slides.length - 1)) { // If slide < total slides
          move(currentIndex + 1);            // Move to next slide
        } else {                             // Otherwise
          move(0);                           // Move to the first slide
        }
      }, 4000);                              // Milliseconds timer will wait
    }
  
    $.each($slides, function(index) {
      // Create a button element for the button
      var $button = $('<button type="button" class="slide-btn">•</button>');
      if (index === currentIndex) {    // If index is the current item
        $button.addClass('active');    // Add the active class
      }
      $button.on('click', function() { // Create event handler for the button
        move(index);                   // It calls the move() function
      }).appendTo('.slide-buttons');   // Add to the buttons holder
      buttonArray.push($button);       // Add it to the button array
    });
  
    advance();                          // Script is set up, advance() to move it
  
  });

//image gallery
    $(document).ready(function() {
     
    	$("#myimagelinks").imagelinks({
    		theme: "imgl-default", // CSS styles for controls, change it to match your own theme
    		popover: true, // enable or disable the build-in popover system
    		popoverTemplate: "<div class='imgl-popover'><div class='imgl-close'></div><div class='imgl-arrow'></div><div class='imgl-content'></div></div>", // base HTML to use when creating the popover
    		popoverPlacement: "top", // set the position of the popover (top, bottom, left, right, top-right, top-left, bottom-right, bottom-left)
    		popoverShowTrigger: "hover", // specify how popover is triggered (click, hover)
    		popoverHideTrigger: "leave", // specify how popover is hidden (click, leave, bodyclick, manual)
    		popoverShowClass: null, // specify the css3 animation class for the popover show
    		popoverHideClass: null, // specify the css3 animation class for the popover hide
    		hotSpotBelowPopover: true, // specify the z-order of the hotSpot against the popover
    		hotSpots: [], // specify an array of hot spots that can be links to news, posters, albums and other media content etc
    		// the definition of a hotSpot
    		// x: 0 // specify the x position of the hotspot’s location in % [0;1]
    		// y: 0 // specify the y position of the hotspot’s location in % [0;1]
    		// className: null // specify additional css classes
    		// content: null // if set, the value is displayed as the hotspot's content
    		// popoverHtml: true // specify the type of the popover content
    		// popoverWidth: null // specify the width in px of the popover
    		// popoverContent: null // if set, the value is displayed as the popover's content, it can be text or HTML content, or a method - function myfunc()
    		// popoverPlacement: "top" // set the position of the popover (top, bottom, left, right, top-right, top-left, bottom-right, bottom-left)
    		// userData: null // specify the user data that is associated with the hotspot, useful when the popoverContent is a method
    		hotSpotSetup: false, // set or disable manual setup of hotspots in the current image
    		mobile: false, // enable or disable the animation in the mobile browsers
    	});
     
    });


