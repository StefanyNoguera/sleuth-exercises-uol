/*

Officer: 4098078
CaseNum: 101-3-63620382-4098078

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Medium Purple filled rectangle with a Dark Red outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Medium Purple filled
rectangle with a Cornflower Blue outline around him.

Identify the man reading the newspaper by drawing a Yellow filled rectangle
with a Medium Spring Green outline around him.

Identify the woman with the dog by drawing a Medium Spring Green filled rectangle with a
Dark Green outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    fill(147,112,219,100);
    stroke(139,0,0)
    rect(753, 50, 280, 565);
    
    stroke(100,149,237);
    rect(236, 230, 225, 300);
    
    fill(255,255,0,100);
    stroke(0,250,154);
    rect(562, 133, 175, 340);
    
    fill(0,250,154,100);
    stroke(0,100,0);
    rect(1047, 50, 170, 355);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
