var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has colors inverted, then written to a file on the hard disk. 
	img.invert().write("./images/invert.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  