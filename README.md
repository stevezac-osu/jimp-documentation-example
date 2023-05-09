# JIMP - JavaScript Image Manipulation Program
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true)

## Table of Contents

- [Installation](#installation)
- [Getting Started - Reading and Writing an Image File](#getting-started---reading-and-writing-an-image-file) 
  - [The Jimp.read() Method](#the-jimpread-method)
  - [The Image.write() Method](#the-imgwrite-method)
- [Example Manipulations](#example-manipulations)
  - [Rotating](#rotating)
  - [Flipping](#flipping)
  - [Resizing](#resizing)
  - [Color](#color)
- [Complete List of Manipulations](#complete-list-of-manipulations)
- [Additional Resources](#additional-resources)


## Introduction
JIMP is an image processing library for Node written in JavaScript/TypeScript, with zero native dependencies.  JIMP is an acronym that stands for "JavaScript Image Manipulation Program."

This documentation is for beginners to learn the basics of using this powerful image manipulation image engine in a fast, easy way. 

## Installation
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

```js

// navigate to the root directory for the project

// To install using NPM
npm install jimp 

// To install using Yarn
yarn add jimp

```

## Getting Started - Reading and Writing an Image File
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

To start, an image must be read so that manipulations can be performed on such an image.  To do so, JIMP must first **read** an image file.

JIMP can manipulate various image types, such as:
- bmp
- gif
- jpeg/jpg
- png
- tiff

Non-supported image types will provide an error.

### The Jimp.read() Method
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

The **read** method can be executed to read an image using a callback function or using Promises.

For example, using a callback:

```js
var Jimp = require("jimp");

// read takes two arguments:
// a filename as a string; and
// a callback function with two arguments:
// - an error; and
// - the read image
Jimp.read("./file_to_read.jpg", function(err, img) {
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
	// ... perform manipulations here
});
``` 

Alternatively, you can use read using Promise syntax:

```js
var Jimp = require("jimp");

// read takes one argument: a filename as a string
// a then function can be chained with a callback function with the expected image as an argument
// and a catch function can be chained with a callback function with an error as an argument
Jimp.read("./file_to_read.jpg").then(function(img){
	// ... perform manipulations here
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});
``` 

The filename argument of the read method can be a relative path to a file, an absolute path to a file, a URL, a previous Jimp image (to create a clone version), a loaded buffer.
```js
var Jimp = require("jimp");

// Jimp.read(relative_path)
Jimp.read("./file_to_read.jpg").then(function(img){...}).catch(function(err){...})

// Jimp.read(absolute_path)
Jimp.read("/home/user/folder/file_to_read.jpg").then(function(img){...}).catch(function(err){...})

// Jimp.read(URL)
Jimp.read("https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true").then(function(img){...}).catch(function(err){...})

// Jimp.read(width, height[, hexcolor])
Jimp.read(100, 100, "#ffffff").then(function(img){...}).catch(function(err){...})
```

Instead of file name, it's also permitted to provide a two numbers representing the width and height to create a blank canvas.
```js
var Jimp = require("jimp");

// Jimp.read(width, height[, hexcolor])
Jimp.read(100, 100).then(function(img){...}).catch(function(err){...})

// Jimp.read(width, height[, hexcolor])
Jimp.read(100, 100, "#ffffff").then(function(img){...}).catch(function(err){...})
```

### The img.write() Method
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

Once you have performed various modifications to an image, you may likely want to write that image to a file.  To do so, you can use the img.write() method.

For example:
```js
var Jimp = require("jimp");

Jimp.read("./file_to_read.jpg").then(function(img){
	// On the image object that you receive in the callback, you can perform various manipulation functions
	// You can also write such a file to the hard disk.
	// In the example below, the image is rotated 90 degrees, then written to a file on the hard disk.  
	img.rotate(90).write("./rotated_file_to_write.jpg")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});
```

## Example Manipulations

### Rotating
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

The **rotate** method can rotate an image.  The **rotate** method takes a number value that represents the number of degrees to rotate the image.  The image will be rotated counter-clockwise for positive numbers and clockwise for negative numbers.

#### Rotating Counterclockwise 90-Degrees
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is rotated 90 degrees counterclockwise, then written to a file on the hard disk.  
	img.rotate(90).write("./images/rotate-ex1.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image Rotated Counter Clockwise 90 Degrees](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/rotate-ex1.png?raw=true)

#### Rotating Clockwise 90-Degrees
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is rotated 90 degrees clockwise, then written to a file on the hard disk.  
	img.rotate(-90).write("./images/rotate-ex2.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image Rotated Clockwise 90 Degrees](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/rotate-ex2.png?raw=true)

### Flipping
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

The **flip** method allows the user to flip an image over a horizontal axis and/or vertical axis.  The flip method takes two arguments:
- a boolean value to denote whether to flip the image over the horizontal axis; and 
- a boolean value to denote whether to flip the image over the vertical axis.

#### Flip image horizontally
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is flipped over the horizontal axis, then written to a file on the hard disk.  
	img.flip(true, false).write("./images/flip-ex1.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image Flipped Horizontally](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/flip-ex1.png?raw=true)

#### Flip image vertically
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is flipped over the vertical axis, then written to a file on the hard disk.  
	img.flip(false, true).write("./images/flip-ex2.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image Flipped Vertically](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/flip-ex2.png?raw=true)

#### Flip image horizontally and vertically
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is flipped over both the horizontal and the vertical axis, then written to a file on the hard disk.  
	img.flip(true, true).write("./images/flip-ex3.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image Flipped Vertically](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/flip-ex3.png?raw=true)

### Resizing
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

There are various ways to resize an image.  However there are two that we will focus on in this documentation: the **resize** and the **scaleToFit** methods.

#### Resize an Image
The **resize** method takes two arguments:
- a width integer (in pixels); and
- a height integer (in pixels).

The primary example is resizing the image to an oblong image shape:
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is resized from 256px (width) by 256px (height) to 100px (width) by 150px (height), then written to a file on the hard disk.  
	img.resize(100, 150).write("./images/resize-ex1.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image resized to 100 by 150](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/resize-ex1.png?raw=true)

#### Scaling an Image to Fit
The **scaleToFit** method also takes two arguments:
- a width integer (in pixels); and
- a height integer (in pixels).

Although they would seem the same, given the exact same parameters yields a different result:

```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image is scaled to fit from 256px (width) by 256px (height) to an area of 100px (width) by 150px (height), then written to a file on the hard disk.  
	img.scaleToFit(100, 150).write("./images/resize-ex2.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image resized to 100 by 100](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/resize-ex2.png?raw=true)

You can see that the image now retained it's original aspect ratio, but rescaled to the maximum of the sizes that it was provided.

### Color
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

There are four example color methods we will review, **brightness**, **contrast**, **greyscale**, and **invert**

Both the **greyscale** and the **invert** methods take no arguments.  However, both the **brightness** and the **contrast** methods take one number argument, between -1 and 1, that represents the percentage to increase (positive) or decrease (negative) the brightness or the contrast of the image.

#### Increase Brightness by 50%
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has brightness increased, then written to a file on the hard disk.  
	img.brightness(.5).write("./images/brightness-ex1.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image with increased brightness](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/brightness-ex1.png?raw=true)

#### Decrease Brightness by 50%
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has brightness decreased, then written to a file on the hard disk. 
	img.brightness(-.5).write("./images/brightness-ex2.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image with decreased brightness](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/brightness-ex2.png?raw=true)

#### Increase Contrast by 50%
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has Contrast increased, then written to a file on the hard disk. 
	img.contrast(.5).write("./images/contrast-ex1.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image with increased contrast](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/contrast-ex1.png?raw=true)

#### Decrease Contrast by 50%
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has Contrast decreased, then written to a file on the hard disk. 
	img.contrast(-.5).write("./images/contrast-ex2.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image with decreased contrast](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/contrast-ex2.png?raw=true)

#### Greyscale
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has color removed, then written to a file on the hard disk. 
	img.greyscale().write("./images/greyscale.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image greyed](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/greyscale.png?raw=true)

#### Inverted Colors
```js
var Jimp = require("jimp");

// the crayon.png image will be read
Jimp.read("./images/crayon.png").then(function(img){
	
	//the image has colors inverted, then written to a file on the hard disk. 
	img.invert().write("./images/invert.png")
}).catch(function(err){
	//if an error is provided, you can throw the error to the system or handle as necessary
	if (err) throw err;
});  
```
The Result is that:
![Crayon Image](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/crayon.png?raw=true) becomes ![Crayon Image inverted](https://github.com/stevezac-osu/jimp-documentation-example/blob/main/images/invert.png?raw=true)


## Complete List of Manipulations
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

Resize
```js
image.contain( w, h[, alignBits || mode, mode] ); // scale the image to the given width and height, some parts of the image may be letter boxed
image.cover( w, h[, alignBits || mode, mode] ); // scale the image to the given width and height, some parts of the image may be clipped
image.resize( w, h[, mode] ); // resize the image. Jimp.AUTO can be passed as one of the values.
image.scale( f[, mode] ); // scale the image by the factor f
image.scaleToFit( w, h[, mode] ); // scale the image to the largest size that fits inside the given width and height

// An optional resize mode can be passed with all resize methods.
```

Crop
```js

image.autocrop([tolerance, frames]); // automatically crop same-color borders from image (if any), frames must be a Boolean
image.autocrop(options); // automatically crop same-color borders from image (if any), options may contain tolerance, cropOnlyFrames, cropSymmetric, leaveBorder
image.crop( x, y, w, h ); // crop to the given region
```

Composing
```js
image.blit( src, x, y, [srcx, srcy, srcw, srch] ); // blit the image with another Jimp image at x, y, optionally cropped.
image.composite( src, x, y, [{ mode, opacitySource, opacityDest }] ); // composites another Jimp image over this image at x, y
image.mask( src, x, y ); // masks the image with another Jimp image at x, y using average pixel value
image.convolute( kernel ); // applies a convolution kernel matrix to the image or a region
```

Flip and Rotate
```js
image.flip( horz, vert ); // flip the image horizontally or vertically
image.mirror( horz, vert ); // an alias for flip
image.rotate( deg[, mode] ); // rotate the image counter-clockwise by a number of degrees. Optionally, a resize mode can be passed. If `false` is passed as the second parameter, the image width and height will not be resized.
```

Color
```js
image.brightness( val ); // adjust the brighness by a value -1 to +1
image.contrast( val ); // adjust the contrast by a value -1 to +1
image.dither565(); // ordered dithering of the image and reduce color space to 16-bits (RGB565)
image.greyscale(); // remove colour from the image
image.invert(); // invert the image colours
image.normalize(); // normalize the channels in an image
```

Alpha channel
```js
image.hasAlpha(); // determines if an image contains opaque pixels
image.fade( f ); // an alternative to opacity, fades the image by a factor 0 - 1. 0 will haven no effect. 1 will turn the image
image.opacity( f ); // multiply the alpha channel by each pixel by the factor f, 0 - 1
image.opaque(); // set the alpha channel on every pixel to fully opaque
image.background( hex ); // set the default new pixel colour (e.g. 0xFFFFFFFF or 0x00000000) for by some operations (e.g. image.contain and
```

Blurs
```js
image.gaussian( r ); // Gaussian blur the image by r pixels (VERY slow)
image.blur( r ); // fast blur the image by r pixels
```

Effects
```js
image.posterize( n ); // apply a posterization effect with n level
image.sepia(); // apply a sepia wash to the image
image.pixelate( size[, x, y, w, h ]); // apply a pixelation effect to the image or a region
```

3D
```js
image.displace( map, offset ); // displaces the image pixels based on the provided displacement map. Useful for making stereoscopic 3D images.
```

## Additional Resources
<p align="right"><a href="#jimp---javascript-image-manipulation-program">Back to Table of Contents</a></p>

Additional information about how to use JIMP can be found at the [JIMP github repository](https://github.com/jimp-dev/jimp).



