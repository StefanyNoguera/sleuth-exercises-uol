/*

Officer: 4098078
CaseNum: 502-3-99361223-4098078

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words.
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var evidenceA = [
{
	detail0: ["charge", "mend", "clip", "syndicate"],
	detail1: ["hurry", "smile", "clip", "sneeze"],
	detail2: ["COBOL", "tug", "rejoice", "protect"]
},
{
	detail0: ["you", "ALGOL", "plug", "rejoice"],
	detail1: ["stuff", "play", "development", "fence"],
	detail2: ["tug", "charge", "play", "protect"]
},
{
	detail0: ["sneeze", "fence", "meddle", "sail"],
	detail1: ["clip", "consider", "plug", "play"],
	detail2: ["stuff", "sail", "mend", "rejoice"]
},
{
	detail0: ["bake", "sail", "charge", "hurry"],
	detail1: ["smile", "smile", "tug", "succeed"],
	detail2: ["tug", "plug", "fence", "clip"]
},
{
	detail0: ["bake", "fence", "meddle", "succeed"],
	detail1: ["protect", "rejoice", "sail", "fence"],
	detail2: ["plug", "meddle", "sail", "consider"]
}];

var evidenceB = [
{
	detail0: ["tug", "mend", "rejoice", "radiate"],
	detail1: ["consider", "sneeze", "fence", "consider"],
	detail2: ["radiate", "plug", "hurry", "meddle"]
},
{
	detail0: ["play", "charge", "bake", "plug"],
	detail1: ["clip", "fence", "start", "Edsger"],
	detail2: ["start", "radiate", "hurry", "rejoice"]
},
{
	detail0: ["play", "stuff", "rejoice", "plug"],
	detail1: ["fence", "sneeze", "sneeze", "tug"],
	detail2: ["tug", "meddle", "smile", "plug"]
},
{
	detail0: ["$200,000", "sail", "stuff", "stuff"],
	detail1: ["start", "hurry", "smile", "consider"],
	detail2: ["succeed", "meddle", "mend", "protect"]
},
{
	detail0: ["start", "Governor Zuckerberg", "consider", "succeed"],
	detail1: ["start", "stuff", "play", "protect"],
	detail2: ["ALGOL fish wholesalers", "donation", "consider", "charge"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + evidenceB[1].detail1[3] + ", I have just received your very generous " + evidenceB[4].detail2[1] + " of " + evidenceB[3].detail0[0] + ". Thank you. This will be invaluable to our campaign. " + evidenceA[1].detail0[1] + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of +++ or ++++++++++++++++++++++ to the +++++++++. Your new +++++++++++ at the +++++ can now proceed without impediment. Yours sincerely, +++++++++++++++++++";

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
