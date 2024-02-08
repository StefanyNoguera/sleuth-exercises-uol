/*

Officer: 4098078
CaseNum: 701-0-66261477-4098078

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist tamica thaxter and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspectProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I'm not quite sure. They wore very thick glasses. Their expression seemed blank. They had shaved hair. It's so hard to remember right now. Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "JULIANA WILLMAR",
		"expression": "blank",
		"hair": "shaved",
		"glasses": "very thick"
	},
	{ 
		"name": "LESLEY FORSLIN",
		"expression": "angry",
		"hair": "thick black",
		"glasses": "cheap plastic"
	},
	{ 
		"name": "DARBY CASIMERE",
		"expression": "confused",
		"hair": "short black",
		"glasses": "very thin"
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

// Declare your function here



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(matchSuspectProperties(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
