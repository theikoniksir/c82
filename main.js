var mouseevent = "empty";
var last_x, last_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "black";
widthofline = 1 ;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseevent ="mousedown";
    color = document.getElementById("color").value;
    widthofline = document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseevent ="mouseup";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseevent ="mouseleave";
}
canvas.addEventListener("mousemove ",my_mouse_move);
function my_mouse_move(e){
    currentx = e.clientX-canvas.offsetLeft;
    currenty = e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= widthofline;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    last_x=currentx;
    last_y=currenty;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}