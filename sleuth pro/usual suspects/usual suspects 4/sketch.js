/*

Officer: 4098078
CaseNum: 701-3-20781142-4098078

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from nicole jacquelin.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspectTraits function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. I remember they had a big arrow tattoo. It's hard to say. I'll never forget their grey eyes. They were fairly tall, I think between a height of 168 and 184 cm. I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. They wore thin metallic glasses. They brobably weigh between 70 and 76 kg. They had ginger hair. Their expression seemed menacing. It was very dark and I could barely see, They seemed to be between the age of 18 and 45 years old. It was very dark and I could barely see, That's all I can remember about them.

*/

var usualSuspects = [
	{
		"name": "BRIDGET NIEMELA",
		"item": "fur vest",
		"glasses": "very thick",
		"eyes": "green",
		"hair": "short black",
		"weight": 57,
		"height": 178,
		"age": 44
	},
	{
		"name": "JESUS CASIMERE",
		"item": "orange socks",
		"glasses": "white",
		"eyes": "blue",
		"hair": "dark brown",
		"weight": 83,
		"height": 161,
		"age": 58
	},
	{
		"name": "DEEDEE DAVISWOOD",
		"item": "pair of leather trousers",
		"glasses": "red",
		"eyes": "black",
		"hair": "thin blond",
		"weight": 83,
		"height": 204,
		"age": 49
	},
	{
		"name": "JACQUELINE DURANTS",
		"item": "net weave shirt",
		"glasses": "blue",
		"eyes": "green",
		"hair": "long white",
		"weight": 80,
		"height": 194,
		"age": 48
	},
	{
		"name": "LINETTE TINTLE",
		"item": "pink scarf",
		"glasses": "thin metallic",
		"eyes": "grey",
		"hair": "ginger",
		"weight": 74,
		"height": 181,
		"age": 19
	},
	{
		"name": "DRUSILLA JOYER",
		"item": "purple hat",
		"glasses": "very thin",
		"eyes": "grey",
		"hair": "shaved",
		"weight": 95,
		"height": 175,
		"age": 32
	},
	{
		"name": "JAUNITA JACQUELIN",
		"item": "dotted necktie",
		"glasses": "dark brown",
		"eyes": "brown",
		"hair": "no",
		"weight": 87,
		"height": 177,
		"age": 45
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here

function checkSuspectTraits(suspectObj){
    var matches = 0;
    if (suspectObj.item === "pink scarf") {
        matches++;
    }
    if (suspectObj.glasses === "thin metallic") {
        matches++;
    }

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
