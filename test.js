var Jimp = require("jimp");

Jimp.read("./images/crayon.png").then((img) => {
	img.rotate(90).write("./images/rotate-ex1.png")
}).catch((err) => {throw err})