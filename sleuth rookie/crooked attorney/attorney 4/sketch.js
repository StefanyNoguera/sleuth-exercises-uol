/*

Officer: 4098078
CaseNum: 303-3-63237415-4098078

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Use the 'random' function to produce random values ranging from 1 to 12.
	- Assign the output to ClassifiedStoreComb_0

	When the mouse button is released:
	- Use the 'map' function to scale mouseY to values ranging from 2 to 12.
	- Assign the output to ClassifiedStoreComb_1

	When any key is released:
	- Make ClassifiedStoreComb_2 equal to the value of 'keyCode'

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 20 to 75.
	- Assign the output to ClassifiedStoreComb_3

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 9 to 68.
	- Assign the output to ClassifiedStoreComb_4

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseY to values ranging from 15 to 74.
	- Assign the output to ClassifiedStoreComb_5



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var ClassifiedStoreComb_0;
var ClassifiedStoreComb_1;
var ClassifiedStoreComb_2;
var ClassifiedStoreComb_3;
var ClassifiedStoreComb_4;
var ClassifiedStoreComb_5;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	ClassifiedStoreComb_0 = 0;
	ClassifiedStoreComb_1 = "";
	ClassifiedStoreComb_2 = "";
	ClassifiedStoreComb_3 = 0;
	ClassifiedStoreComb_4 = 0;
	ClassifiedStoreComb_5 = 0;

}

///////////////////EVENT HANDLERS///////////////////

function mousePressed()
{
  console.log("mousePressed");
  ClassifiedStoreComb_0 = random(1, 12);
}

function mouseReleased()
{
  console.log("mouseReleased");
  ClassifiedStoreComb_1 = map(mouseY, 0, height, 2, 12);
}

function mouseMoved()
{
  console.log("mouseMoved");
  ClassifiedStoreComb_3 = map(mouseX, 0, width, 20, 75);
  ClassifiedStoreComb_4 = map(mouseX, 0, width, 9, 68);
  ClassifiedStoreComb_5 = map(mouseY, 0, height, 15, 74);
}

function keyReleased()
{
  console.log("keyReleased", key, keyCode);
  ClassifiedStoreComb_2 = keyCode;
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,ClassifiedStoreComb_0,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, ClassifiedStoreComb_1);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, ClassifiedStoreComb_2);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(ClassifiedStoreComb_3);
	pop();

	push();
	translate(250,356);
	drawLever(ClassifiedStoreComb_4);
	pop();

	push();
	translate(375,356);
	drawLever(ClassifiedStoreComb_5);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
