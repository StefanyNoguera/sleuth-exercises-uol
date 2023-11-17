/*
The case of the Python Syndicate
Stage 3


Officer: 4098078
CaseNum: 301-2-94171374-4098078

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna Karpinski has been declared and initialised
- Position each mugshot relative to Anna Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Anna Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Anna Karpinski
- Do not add any additional commands

*/

var photoBoard;
var bones_karpinski_image;
var anna_karpinski_image;
var ada_lovelace_image;
var countess_hamilton_image;
var rocky_kray_image;
var pawel_karpinski_image;

var anna_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	ada_lovelace_image = loadImage("ada.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_object = {
		x: 408,
		y: 40,
		image: anna_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);

	image(bones_karpinski_image, anna_karpinski_object.x - 293, anna_karpinski_object.y);
	image(ada_lovelace_image, anna_karpinski_object.x + 293, anna_karpinski_object.y);
	image(countess_hamilton_image, anna_karpinski_object.x -293, anna_karpinski_object.y + 269);
	image(rocky_kray_image, anna_karpinski_object.x, anna_karpinski_object.y + 269);
	image(pawel_karpinski_image, anna_karpinski_object.x + 293, anna_karpinski_object.y + 269);

}
