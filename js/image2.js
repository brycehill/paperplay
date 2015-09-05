var raster = new Raster('face')

raster.position = view.center
raster.scale(0.6)
var path = new Path.Circle({
    center: [50, 50],
    radius: 30,
    strokeColor: 'white'
})


function onMouseMove(event) {
    // Set the fill color of the path to the average color
    // of the raster at the position of the mouse:
    path.fillColor = raster.getAverageColor(event.point);
}
