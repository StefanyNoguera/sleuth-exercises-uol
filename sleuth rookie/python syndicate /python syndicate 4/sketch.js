/*
The case of the Python Syndicate
Stage 4

Officer: 4098078
CaseNum: 301-3-35551523-4098078

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object.
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countess_hamilton_img;
var ada_lovelace_img;
var anna_karpinski_img;
var pawel_karpinski_img;
var robbie_kray_img;
var bones_karpinski_img;

var ada_lovelace_object;
var countess_hamilton_object;
var anna_karpinski_object;
var pawel_karpinski_object;
var robbie_kray_object;
var bones_karpinski_object;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	ada_lovelace_img = loadImage("ada.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	ada_lovelace_object = {
		x: 408,
		y: 40,
		image: ada_lovelace_img
	};

  countess_hamilton_object = {
    x: 115,
    y: 40,
    image: countess_hamilton_img
  }

  anna_karpinski_object = {
    x: 701,
    y: 40,
    image: anna_karpinski_img
  }

  pawel_karpinski_object = {
    x: 115,
    y: 309,
    image: pawel_karpinski_img
  }

  robbie_kray_object = {
    x: 408,
    y: 309,
    image: robbie_kray_img
  }

  bones_karpinski_object = {
    x: 701,
    y: 309,
    image: bones_karpinski_img
  }



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);
	image(ada_lovelace_object.image, ada_lovelace_object.x, ada_lovelace_object.y);
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);


}
