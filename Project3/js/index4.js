$(document).ready(function(){
    var currentMousePos = { x: -1, y: -1 };
    $('#xraycontainer').mousemove(function(e) {
        currentMousePos.x = e.pageX;
        currentMousePos.y = e.pageY;

      $('#xray2').css('-webkit-mask-position-x', currentMousePos.x-250);
      $('#xray2').css('-webkit-mask-position-y', currentMousePos.y-250);
    });
});
