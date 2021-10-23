const { fabric } = require("./fabric");

var canvas= new fabric.Canvas('myCanvas')
ball_obj=url("");
hole_obj=url("");
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

function load_img () {
    fabric.Image.fromURL("hole.jfif", function(Img) {
hole_obj=Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
    top:hole_y,
    left:hole_x
});
canvas.add(hole_obj);
    });
    new_img ();
}

function new_img () {
    fabric.Image.fromURL("hole.jfif", function(Img) {
        ball_obj= Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
    });
    