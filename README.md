# JIMP - JavaScript Image Manipulation Program

## Introduction
JIMP is an image processing library for Node written in JavaScript/TypeScript, with zero native dependencies.  JIMP is an acronym that stands for "JavaScript Image Manipulation Program." 

JIMP can manipulate various image types, such as:
- bmp
- gif
- jpeg/jpg
- png
- tiff

## Installation

```js

// navigate to the root directory for the project

// To install using NPM
npm install jimp 

// To install using Yarn
yarn add jimp

```

## Basic Usage - Reading a Image File

To start, an image must be read so that manipulations can be performed on such an image.  To do so, JIMP must first **read** an image file.

### The Read() Method

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
Jimp.read("http://").then(function(img){...}).catch(function(err){...})

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

