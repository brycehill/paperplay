var raster = new Raster('face')

raster.position = view.center
raster.scale(0.6)
raster.opacity = 0.1


tool.fixedDistance = 25;



function onMouseMove(event) {
    // Set the fill color of the path to the average color
    // of the raster at the position of the mouse:
    var path = new Path.Circle({
        center: event.middlePoint,
        radius: 12
    })

    path.fillColor = raster.getAverageColor(event.point);
}
