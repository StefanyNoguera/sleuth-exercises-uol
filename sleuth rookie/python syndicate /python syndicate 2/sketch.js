/*
The case of the Python Syndicate
Stage 2


Officer: 4098078
CaseNum: 301-1-31181785-4098078

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky Kray

- The variables for Rocky Kray have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Rocky Kray
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Rocky Kray variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Rocky Kray
- Do not add any additional commands

*/

var photoBoard;
var countessHamiltonImg;
var robbieKrayImg;
var annaKarpinskiImg;
var rockyKrayImg;
var pawelKarpinskiImg;
var cecilKarpinskiImg;


var rockyKrayXLoc = 115;
var rockyKrayYLoc = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rockyKrayImg, rockyKrayXLoc, rockyKrayYLoc);

  image(countessHamiltonImg, rockyKrayXLoc, rockyKrayYLoc - 269);  // Adjust the y-coordinate
  image(robbieKrayImg, rockyKrayXLoc + 293, rockyKrayYLoc - 269);  // Adjust the x and y coordinates
  image(annaKarpinskiImg, rockyKrayXLoc + 586, rockyKrayYLoc - 269);  // Adjust the x and y coordinates
  image(pawelKarpinskiImg, rockyKrayXLoc + 293, rockyKrayYLoc);  // Adjust the x-coordinate
  image(cecilKarpinskiImg, rockyKrayXLoc + 586, rockyKrayYLoc);  // Adjust the x-coordinate

}
