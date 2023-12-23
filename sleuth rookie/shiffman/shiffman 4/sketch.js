/*

Officer: 4098078
CaseNum: 403-3-26799879-4098078

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Meyers Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 71 meters from Norbert's Burrito Stall then alert local police by drawing a Coral circle around it with a radius of 71 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a CornflowerBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple rectangle covering the area between Gates Avenue, Berners-Lee Street, Meyers Way and Packard Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    distToBurrito = dist(mouseX, mouseY, 687, 274);

    if (distToBurrito < 71) {
      fill(255,127,80);
      ellipse(687, 274, 142);
    }
    else if (mouseX > 1600 && mouseX < 1720 && mouseY > 239 && mouseY < 295){
      fill(100,149,237);
      rect(1600,239,119,56);
    }
    else {
      fill(147,112,219);
      rect(500,54,1075,514);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255, 0, 255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
