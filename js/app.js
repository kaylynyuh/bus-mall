'use strict';
//Generate random pictures function
function generateMathRand () {
  return Math.floor(Math.random() * myImagesArray.length);
}

var totalClicks = 0;

//An array to store images from constructor
var myImagesArray = [];

var imageNames = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

//Generate exactly 3 random pictures for generateThreeImages function
function randomImage() {
  var a = generateMathRand();
  return myImagesArray[a];
}

//Constructor object with name and path parameters for images
function Image(name) {
  this.name = name.split('.')[0];
  this.path = 'imgs/' + name;
  this.tally = 0;
  this.views = 0;
}

for(var i = 0; i < imageNames.length; i++) {
  myImagesArray.push(new Image(imageNames[i]));
}

function generateImage () {
  if(totalClicks < 25) {
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
    rand1.views += 1;
    rand2.views += 1;
    rand3.views += 1;
    var imageOne = document.getElementById('image-one');
    var imageTwo = document.getElementById('image-two');
    var imageThree = document.getElementById('image-three');
    imageOne.src = rand1.path;
    imageOne.name = rand1.name;
    imageTwo.src = rand2.path;
    imageTwo.name = rand2.name;
    imageThree.src = rand3.path;
    imageThree.name = rand3.name;
  }
};

function handleClick(event) {
  console.log(event.target.name);
  for(var i = 0; i < myImagesArray.length; i++) {
    if (event.target.name === myImagesArray[i].name) {
      myImagesArray[i].tally += 1;
    }
  }
  totalClicks += 1;
  if (totalClicks < 25) {
    generateImage();
  } else {
    var imgs = document.querySelectorAll('.random-image');
    document.removeEventListener('click', imgs);
    document.getElementById('display-button').style.visibility = 'visible';
  }
}

var theImages = document.getElementsByClassName('random-image');
for (var i = 0; i < theImages.length; i++) {
  theImages[i].addEventListener('click', handleClick);
};

function incrementTally(imageName){
  for(var i = 0; i < myImagesArray.length; i++) {
    console.log(myImagesArray[i].name);
    console.log(imageName);
    if(myImagesArray[i].name == imageName) {
      myImagesArray[i].tally += 1;
      break;
    }
  }
}

generateImage();

//no matter where I click it will check that total clicks is not over 25 and if it is...run this code
document.addEventListener('click', function() {
  if (totalClicks > 25) {
    for(var i = 0; i < theImages.length; i++) {
      theImages[i].removeEventListener('click', handleClick);
    }
  }
});

// capture display button click event and call make chart
var displayButton = document.getElementById('display-button');
displayButton.addEventListener('click', makeChart);

function makeChart () {
  function myImageNames () {
    var names = [];
    for(var i = 0; i < myImagesArray.length; i++) {
      names.push(myImagesArray[i].name);
    }
    return names;
  };

  function harvestClicks () {
    var numberOfClicks = [];
    for(var i = 0; i < myImagesArray.length; i++) {
      numberOfClicks.push(myImagesArray[i].tally);
    }
    return numberOfClicks;
  }

  var myChartData = {
    labels: myImageNames(),
    datasets: [{
      label: 'Your Results',
      backgroundColor: 'rgba(59, 225, 203, .5)',
      strokeColor : '#ACC26D',
      data: harvestClicks(),
    }]
  };

  var displayResults = document.getElementById('results-chart').getContext('2d');
  new Chart.Bar(displayResults, {
    data: myChartData
  });
};
