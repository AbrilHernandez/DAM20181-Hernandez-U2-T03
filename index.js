function createSquare(config) {
    var newSquare = { color: "", area: 0, ancho: 0 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.ancho = config.width;
    newSquare.area = config.width * config.width;
    return newSquare;
}
var mySquare = createSquare({ color: "negro", width: 2 });
console.log(mySquare);
