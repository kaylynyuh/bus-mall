'use strict'
//Generate random pictures function
function generateMathRand (min, 24) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//An array to store images from constructor
var myImagesArray = [];

function Images(name, path, tally,) {
  this.name = name;
  this.path = path;
  this.tall = path;
  myImagesArray.push(this);
}
