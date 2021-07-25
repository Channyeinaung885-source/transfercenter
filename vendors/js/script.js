$(document).ready(function() {
   $('.js--our-service').waypoint(function (direction) {
       if (direction == 'down') {
           $('nav').addClass('sticky');
       }
       else {
            $('nav').removeClass('sticky');
       }
   });
});