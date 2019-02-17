$(document).ready(function(){
  $('html').on('keydown',function(event){
    var press = event.which;
    console.log(press);
    $(".keys[data-key="+press+"]").addClass('pressed');
    $('html').on('keyup',function(event){
      $(".keys[data-key="+press+"]").removeClass('pressed');
    });
  });
});
