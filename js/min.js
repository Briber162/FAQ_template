$(document).ready(function(){

 var action ="click";
 var speed = '500';

 $('li.q').on(action, function(){
     $(this).next()
        .slideToggle(speed)
            .siblings('li.a')
                .slideUp();
    var img = $(this).children('img');
    //Adding rotate class for the arrow icon
    $('img').not(img).removeClass('rotate');
    img.toggleClass('rotate');
 });

});