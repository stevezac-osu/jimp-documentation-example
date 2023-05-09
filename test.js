var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is flipped over both the horizontal and the vertical axis, then written to a file on the hard disk.  
	img.flip(true, true).write("./images/flip-ex3.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  