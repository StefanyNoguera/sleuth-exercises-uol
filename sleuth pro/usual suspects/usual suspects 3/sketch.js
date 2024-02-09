/*

Officer: 4098078
CaseNum: 701-2-29642339-4098078

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from drusilla forslin. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. Their expression seemed angry. They seemed to be between the age of 30 and 56 years old. It was so scary! I remember they had a bull tattoo. It was very dark and I could barely see, They were fairly tall, I think between a height of 150 and 185 cm. They brobably weigh between 62 and 100 kg. They wore light tan glasses. The person I saw was female. They had long white hair. That's all I know officer.

*/

var suspectList = [
	{
		"name": "SUMMER PORTOS",
		"gender": "male",
		"hair": "white",
		"tattoo": "neck",
		"expression": "menacing",
		"weight": 74,
		"height": 177,
		"age": 42
	},
	{
		"name": "JAUNITA NIEMELA",
		"gender": "female",
		"hair": "shaved",
		"tattoo": "jellyfish",
		"expression": "empty",
		"weight": 60,
		"height": 167,
		"age": 47
	},
	{
		"name": "JESUS SILVEIRA",
		"gender": "male",
		"hair": "ginger",
		"tattoo": "chinese lettering",
		"expression": "confused",
		"weight": 70,
		"height": 176,
		"age": 46
	},
	{
		"name": "LAKESHA COURTWOOD",
		"gender": "male",
		"hair": "no",
		"tattoo": "sword",
		"expression": "depressed",
		"weight": 85,
		"height": 175,
		"age": 42
	},
	{
		"name": "HANG MOHWAWK",
		"gender": "female",
		"hair": "long white",
		"tattoo": "bull",
		"expression": "angry",
		"weight": 66,
		"height": 151,
		"age": 45
	},
	{
		"name": "MALINDA DEAUVILLE",
		"gender": "female",
		"hair": "thin blond",
		"tattoo": "big arrow",
		"expression": "sad",
		"weight": 72,
		"height": 182,
		"age": 47
	},
	{
		"name": "DARBY DORCEY",
		"gender": "male",
		"hair": "short black",
		"tattoo": "anchor",
		"expression": "blank",
		"weight": 77,
		"height": 172,
		"age": 36
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
function checkSuspectTraits(suspectObj){
  let matchingProperties = 0;
  if(suspectObj.expression === "angry"){
    matchingProperties++;
  }
  if(suspectObj.age >= 30 && suspectObj.age <= 56){
    matchingProperties++;
  }
  if(suspectObj.tattoo === "bull"){
    matchingProperties++;
  }
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    let matchingProperties = checkSuspectTraits(suspectList[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
  }
}
