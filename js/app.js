'use strict';
//Generate random pictures function
function generateMathRand () {
  return Math.floor(Math.random() * myImagesArray.length);
}

var totalClicks = 0;

//An array to store images from constructor
var myImagesArray = [];

//Generate exactly 3 random pictures for generateThreeImages function
function randomImage() {
  var a = generateMathRand();
  return myImagesArray[a];
}

//Constructor object with name and path parameters for images
function Image(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  myImagesArray.push(this);
}

var bag = new Image('bag', 'imgs/bag.jpg');
var banana = new Image('banana', 'imgs/banana.jpg');
var bathroom = new Image('bathroom', 'imgs/bathroom.jpg');
var boots = new Image('boot', 'imgs/boots.jpg');
var breakfast = new Image('breakfast', 'imgs/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'imgs/bubblegum.jpg');
var chair = new Image('chair', 'imgs/chair.jpg');
var cthulhu = new Image('cthulhu', 'imgs/cthulhu.jpg');
var dogDuck = new Image('dogDuck', 'imgs/dog-duck.jpg');
var dragon = new Image('dragon', 'imgs/dragon.jpg');
var pen = new Image('pen', 'imgs/pen.jpg');
var petSweep = new Image('petSweep', 'imgs/pet-sweep.jpg');
var scissors = new Image('scissors', 'imgs/scissors.jpg');
var shark = new Image('shark', 'imgs/shark.jpg');
var sweep = new Image('sweep', 'imgs/sweep.png');
var tauntaun = new Image('tauntaun', 'imgs/tauntaun.jpg');
var unicorn = new Image('unicorn', 'imgs/unicorn.jpg');
var usb = new Image('usb', 'imgs/usb.gif');
var waterCan = new Image('waterCan', 'imgs/water-can.jpg');
var wineGlass = new Image('wineGlass', 'imgs/wine-glass.jpg');

//Generate the three random images to the browser
function generateImage () {
  var rand1 = randomImage();
  var rand2 = randomImage();
  var rand3 = randomImage();
  while (rand1 === rand2 || rand1 === rand3) {
    rand1 = randomImage();
  }
  while (rand2 === rand1 || rand2 === rand3) {
    rand2 = randomImage();
  }
  while (rand3 === rand1 || rand3 === rand2) {
    rand3 = randomImage();
  }
  var imageOne = document.getElementById('image-one');
  var imageTwo = document.getElementById('image-two');
  var imageThree = document.getElementById('image-three');
  imageOne.src = rand1.path;
  imageTwo.src = rand2.path;
  imageThree.src = rand3.path;
};

var theImages = document.getElementsByClassName('random-image');
for (var i = 0; i < theImages.length; i++) {
  theImages[i].addEventListener('click', generateImage);
};



/*  while (totalClicks < 25) {
    if (event.target.id === 'imageOne') {
      totalClicks ++;
      console.log(totalClicks);
    }
    if (event.target.id === 'imageTwo') {
      totalClicks ++;
    }
    if (event.target.id === 'imageThree') {
      totalClicks++;
    }
  }*/






/*var imageSection = document.getElementById('container');
imageSection.addEventListener('click', imageClicked());

function imageClicked (event) {
  if (event.target.id === 'container') {
    alert('Must click on a picture!');
    imageSection.removeEventListener('click', imageClicked());
  }
};*/
