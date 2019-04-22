//TRACKS MOUSE POSITION AND REPLACES CONTAINER WITH AN XRAY MASK IMAGE OF MOVING FLY GIF

$(document).ready(function(){
    var currentMousePos = { x: -1, y: -1 };
    $('#xraycontainer').mousemove(function(e) {
        currentMousePos.x = e.pageX;
        currentMousePos.y = e.pageY;

      $('#xray').css('-webkit-mask-position-x', currentMousePos.x-200);
      $('#xray').css('-webkit-mask-position-y', currentMousePos.y-200);
    });
});
