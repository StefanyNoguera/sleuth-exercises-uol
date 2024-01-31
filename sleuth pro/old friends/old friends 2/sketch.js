/*

Officer: 4098078
CaseNum: 502-1-41991615-4098078

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words.
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var ARecord = [
	{Part0: "sail", Part1: "sneeze", Part2: "fence"},
	{Part0: "stuff", Part1: "COBOL", Part2: "tug"},
	{Part0: "Hopper’s", Part1: "mend", Part2: "stuff"},
	{Part0: "smile", Part1: "capital", Part2: "succeed"},
	{Part0: "romantic", Part1: "hurry", Part2: "a donation"},
	{Part0: "mend", Part1: "play", Part2: "plug"},
	{Part0: "succeed", Part1: "plug", Part2: "stuff"},
	{Part0: "Governor Zuckerberg", Part1: "consider", Part2: "meddle"},
	{Part0: "clip", Part1: "sail", Part2: "play"},
	{Part0: "succeed", Part1: "smile", Part2: "mend"}
];

var BRecord = [
	{Part0: "smile", Part1: "Edsger", Part2: "sail"},
	{Part0: "syndicate", Part1: "sail", Part2: "tug"},
	{Part0: "plug", Part1: "sail", Part2: "delicate"},
	{Part0: "start", Part1: "plug", Part2: "stuff"},
	{Part0: "bake", Part1: "bake", Part2: "hurry"},
	{Part0: "fence", Part1: "rejoice", Part2: "start"},
	{Part0: "she has", Part1: "bake", Part2: "mend"},
	{Part0: "meddle", Part1: "sail", Part2: "charge"},
	{Part0: "fence", Part1: "sail", Part2: "radiate"},
	{Part0: "protect", Part1: "succeed", Part2: "rejoice"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + BRecord[0].Part1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + ARecord[2].Part0 + " intervention. I suspect that " + BRecord[6].Part0 + " a " + ARecord[4].Part0 + " interest at the " + ARecord[1].Part1 + ". I and the " + BRecord[1].Part0 + " appreciate your many contributions over the years. However, this is a most " + BRecord[2].Part2 + " matter which would require significant +++++++ for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps ++++++++++ to my forthcoming campaign would help. Yours sincerely, +++++++++++++++++++";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
