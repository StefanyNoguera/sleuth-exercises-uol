/*
The case of the Python Syndicate
Stage 1

Officer: 4098078
CaseNum: 301-0-20438137-4098078

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables.
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countess_hamilton_img;
var rocky_kray_img;
var anna_karpinski_img;
var ada_lovelace_img;
var robbie_kray_img;
var pawel_karpinski_img;



//declare your new variables below
var rocky_kray_x_coord = 408;
var rocky_kray_y_coord = 40;

var countess_hamilton_x_coord = 115;
var countess_hamilton_y_coord = 40;

var anna_karpinski_x_coord = 701;
var anna_karpinski_y_coord = 40;

var ada_lovelace_x_coord = 115;
var ada_lovelace_y_coord = 309;

var robbie_kray_x_coord = 408;
var robbie_kray_y_coord = 309;

var pawel_karpinski_x_coord = 701;
var pawel_karpinski_y_coord = 309;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	ada_lovelace_img = loadImage("ada.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(rocky_kray_img, rocky_kray_x_coord, rocky_kray_y_coord);
  image(countess_hamilton_img, countess_hamilton_x_coord, countess_hamilton_y_coord);
  image(anna_karpinski_img, anna_karpinski_x_coord, anna_karpinski_y_coord);
  image(ada_lovelace_img, ada_lovelace_x_coord, ada_lovelace_y_coord);
  image(robbie_kray_img, robbie_kray_x_coord, robbie_kray_y_coord);
  image(pawel_karpinski_img, pawel_karpinski_x_coord, pawel_karpinski_y_coord);
}
