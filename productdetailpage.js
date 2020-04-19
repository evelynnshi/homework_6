//make the images change when user click on a color//
$(document).ready(function() 
{
 
  $('.color-choose input').on('click', function() {
      var pillowsColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + pillowsColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});