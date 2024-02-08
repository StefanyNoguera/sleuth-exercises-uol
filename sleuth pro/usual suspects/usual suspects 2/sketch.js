/*

Officer: 4098078
CaseNum: 701-1-21350584-4098078

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It's hard to say. They had shaved hair. They definately weigh less than 76 Kg. I would say they were shorter than 167 cm. I remember they had a chinese lettering tattoo. Their expression seemed menacing. It was very dark and I could barely see, I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "HANG PEGORD",
		"expression": "angry",
		"item": "fur vest",
		"hair": "short black",
		"height": 190,
		"weight": 78
	},
	{ 
		"name": "NELSON JACQUELIN",
		"expression": "empty",
		"item": "dotted necktie",
		"hair": "dark brown",
		"height": 192,
		"weight": 64
	},
	{ 
		"name": "GAYLA SYMMES",
		"expression": "menacing",
		"item": "red necktie",
		"hair": "shaved",
		"height": 160,
		"weight": 73
	},
	{ 
		"name": "DRUSILLA OORIN",
		"expression": "blank",
		"item": "pair of leather trousers",
		"hair": "red",
		"height": 172,
		"weight": 80
	},
	{ 
		"name": "JAUNITA JENI",
		"expression": "nerveous",
		"item": "orange socks",
		"hair": "thick black",
		"height": 175,
		"weight": 62
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

  for(let i = 0 ; i < lineupLog.length; i++){
    if(matchSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
