// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var meals = ["🍗", "🥩", "🥓", "🌮", "🍱", "🍞", "🍦"];
var currentMeal = null;
var currentMealPos = 0;
var saturated = 100;
var time = 0;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 100);
  angleMode(DEGREES)
}

function draw() {
  background("green");

  if (currentMeal == null) {
    currentMeal = meals[Math.floor(Math.random()*meals.length)];
    currentMealPos = 0;
  } else {
    if (currentMealPos > 300) {
      currentMeal = meals[Math.floor(Math.random()*meals.length)];
      currentMealPos = 0;
      saturated = saturated + 10;
    } else {
      currentMealPos = currentMealPos + 5;
    }
  }



  textSize(120);
  textAlign(CENTER);


  text(currentMeal, 400, currentMealPos);
  textSize(saturated + 20);

  fill("yellow");
  ellipse(400, 300, saturated);
  fill("blue")
  ellipse(380, 300, 20, 20);

  fill("red");
  
  arc(400, 300, saturated, saturated,-90 - 20 + Math.sin(time)*20, -90 + 20 - Math.sin(time)*20);

  time = time+1



  //fill("")
  //arc(400, 300, 100, 100, PI, PI + QUARTER_PI);



  

  fill("blue");
  rect(0, 350, 800, 350);
}