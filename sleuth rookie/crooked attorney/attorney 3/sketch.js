/*

Officer: 4098078
CaseNum: 303-2-50768892-4098078

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make RestrictedSafeValue_0 equal to the value of mouseY
	- Use the 'constrain' function to prevent RestrictedSafeValue_0 from falling below 2 and going above 18

	Whilst the mouse is moving:
	- Decrement RestrictedSafeValue_1 by 3
	- Use the 'constrain' function to prevent RestrictedSafeValue_1 from falling below 5 and going above 20

	When the mouse button is pressed:
	- Make RestrictedSafeValue_2 equal to the value of mouseY
	- Use the 'min' function to prevent RestrictedSafeValue_2 from going above 17

	When the mouse button is pressed:
	- Decrement RestrictedSafeValue_3 by 2
	- Use the 'constrain' function to prevent RestrictedSafeValue_3 from falling below 2 and going above 11

	Whilst the mouse is moving:
	- Make RestrictedSafeValue_4 equal to the value of mouseY
	- Use the 'max' function to prevent RestrictedSafeValue_4 from falling below 16



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var RestrictedSafeValue_0;
var RestrictedSafeValue_1;
var RestrictedSafeValue_2;
var RestrictedSafeValue_3;
var RestrictedSafeValue_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	RestrictedSafeValue_0 = 0;
	RestrictedSafeValue_1 = 0;
	RestrictedSafeValue_2 = 0;
	RestrictedSafeValue_3 = 0;
	RestrictedSafeValue_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

//When the mouse button is released:
//- Make RestrictedSafeValue_0 equal to the value of mouseY
//- Use the 'constrain' function to prevent RestrictedSafeValue_0 from falling below 2 and going above 18

function mouseReleased()
{
  console.log("mouseReleased");
  RestrictedSafeValue_0 = constrain(mouseY, 2, 18);
}

//Whilst the mouse is moving:
//- Decrement RestrictedSafeValue_1 by 3
//- Use the 'constrain' function to prevent RestrictedSafeValue_1 from falling below 5 and going above 20

function mouseMoved()
{
  console.log("mouseMoved");
  RestrictedSafeValue_1 -= 3;
  RestrictedSafeValue_1 = constrain(RestrictedSafeValue_1, 5, 20);
  RestrictedSafeValue_4 = max(mouseY, 16);
}

//When the mouse button is pressed:
//- Make RestrictedSafeValue_2 equal to the value of mouseY
//- Use the 'min' function to prevent RestrictedSafeValue_2 from going above 17
//When the mouse button is pressed:
//- Decrement RestrictedSafeValue_3 by 2
//- Use the 'constrain' function to prevent RestrictedSafeValue_3 from falling below 2 and going above 11

function mousePressed()
{
  console.log("mousePressed");
  RestrictedSafeValue_3 -= 2;
  RestrictedSafeValue_3 = constrain(RestrictedSafeValue_3, 2, 11);
  RestrictedSafeValue_2 = min(mouseY, 17);
}

//Whilst the mouse is moving:
//- Make RestrictedSafeValue_4 equal to the value of mouseY
//- Use the 'max' function to prevent RestrictedSafeValue_4 from falling below 16

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,RestrictedSafeValue_0, 22);
	pop();

	push();
	translate(120,380);
	drawDial(140,RestrictedSafeValue_1, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,RestrictedSafeValue_2, 22);
	pop();

	push();
	translate(280,380);
	drawDial(140,RestrictedSafeValue_3, 16);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(RestrictedSafeValue_4);
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
