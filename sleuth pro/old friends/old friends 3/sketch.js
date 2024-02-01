/*

Officer: 4098078
CaseNum: 502-2-86161373-4098078

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words.
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var EvidenceA = {
	Component0: [ "play", "sneeze", "bake"],
	Component1: [ "bake", "bake", "hurry"],
	Component2: [ "sail", "tug", "clip"],
	Component3: [ "Governor Zuckerberg", "fence", "play"],
	Component4: [ "sail", "meddle", "smile"],
	Component5: [ "bake", "radiate", "meddle"],
	Component6: [ "campaign", "plug", "bake"],
	Component7: [ "fence", "play", "mend"],
	Component8: [ "start", "$200,000", "clip"],
	Component9: [ "radiate", "plug", "clip"]
};

var EvidenceB = {
	Component0: [ "radiate", "meddle", "hit"],
	Component1: [ "meddle", "protect", "ALGOL"],
	Component2: [ "rejoice", "protect", "a donation"],
	Component3: [ "start", "tug", "Edsger"],
	Component4: [ "hurry", "clip", "fence"],
	Component5: [ "rejoice", "play", "stuff"],
	Component6: [ "sneeze", "start", "protect"],
	Component7: [ "Hopper", "succeed", "tug"],
	Component8: [ "tug", "fence", "stuff"],
	Component9: [ "fence", "clip", "syndicate"]
};

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
  redactedText = "Dear " + EvidenceA.Component3[0] + ", I am sure that something could be worked out in terms of " + EvidenceB.Component2[2] + " for your ++++++++. How does ++++++++ sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. ++++++ needs to be out of the picture. She’s caused enough trouble. Get the +++++++++ to organise the +++ but I’d prefer it you don’t mention me or +++++. I owe them enough favours already. Your old friend, ++++++";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
