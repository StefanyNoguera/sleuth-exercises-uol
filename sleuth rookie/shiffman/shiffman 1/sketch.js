/*

Officer: 4098078
CaseNum: 403-0-29014137-4098078

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.

- Our sources tell us that he is currently heading south on Meyers Way.
- I need you to sound the alarm if he crosses Ada Avenue.
- Shiffman's position is signified by the mouse.
- To sound the alarm, draw a Yellow rectangle covering the remainder of the map from Ada Avenue to the south.

NB. all road coordinates are measured from their central axis.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  fill()  - Use r,g,b values between 0 and 255.
  rect()
  mouseX
  mouseY
  width
  height

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
    if (mouseY > 245)
    {
      fill(255, 255, 0);
      rect(0, 245, img.width, height - 245);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);

    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
