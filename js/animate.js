var point = new Point(10, 20)
var point2 = new Point(point)
var newPath = new Path()
newPath.add(point)


var topLeft = new Point(10, 20);
var rectSize = new Size(200, 100);
var rect = new Rectangle(topLeft, rectSize);


var path = new Path.Circle({
    center: view.center,
    radius: 60,
    strokeColor: 'black'
});


// function onResize(event) {
//     // Whenever the window is resized, recenter the path:
//     path.position = view.center;
// }
