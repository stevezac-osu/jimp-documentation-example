var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is scaled to fit from 256px (width) by 256px (height) to an area of 100px (width) by 150px (height), then written to a file on the hard disk.  
	img.scaleToFit(100, 150).write("./images/resize-ex2.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  