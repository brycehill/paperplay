var raster = new Raster('face')

raster.position = view.center
raster.scale(0.7)
raster.rotate(45)
raster.visible = false
var spacing = 1.2
var gridSize = 14;
raster.on('load', function() {
    raster.size = new Size(70, 35)
    for (var y = 0; y < raster.height; y++) {
        for (var x = 0; x < raster.width; x++) {
            var color = raster.getPixel(x,y)
            var path = new Path.Circle({
                center: new Point(x, y) * gridSize,
                radius: gridSize / 2 / spacing,
                fillColor: 'black'
            })
            path.fillColor = color
        }
    }
})
//
