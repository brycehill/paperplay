var raster = new Raster('face')

raster.position = view.center
raster.scale(0.8)
raster.rotate(45)
raster.visible = false
raster.on('load', function() {
    raster.size = new Size(70, 35)
    for (var y = 0; y < raster.height; y++) {
        for (var x = 0; x < raster.width; x++) {
            var color = raster.getPixel(x,y)
            var path = new Path.Circle({
                center: new Point(x, y) * 12,
                radius: 15 / 2 / 1.2,
                fillColor: 'black'
            })
            console.log(color.gray)
            path.scale(1-color.gray)
            // path.fillColor = color
        }
    }
})
//
