/*

Officer: 4098078
CaseNum: 202-3-24877280-4098078

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Spring Green filled text with a Dark Blue outline in RonsFont font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(552,375);
	textSize(22);
}

function draw()
{
	background(255);

	fill(32,178,170);
	stroke(0,0,139);
	textFont(Diggity);
	//text("?", 264,114);
	fill(0,255,127);
	stroke(139,69,19);
	textFont(Melissa);
	//text("My", 12,22);
	fill(135,206,250);
	stroke(210,105,30);
	//text("I", 433,66);
	fill(0,255,255);
	stroke(34,139,34);
	//text("ignore", 58,90);
	fill(199,21,133);
	stroke(255,140,0);
	//text("and", 66,141);
	fill(255,127,80);
	stroke(139,69,19);
	textFont(Diggity);
	//text("sometimes.", 11,114);
	fill(0,100,0);
	stroke(153,50,204);
	textFont(Melissa);
	//text("darling", 36,22);
	fill(128,0,128);
	stroke(50,205,50);
	textFont(Ballpointprint);
	//text("Are", 93,114);
	fill(255,140,0);
	stroke(0,191,255);
	textFont(Melissa);
	//text("?", 450,141);
	fill(165,42,42);
	stroke(160,82,45);
	textFont(RonsFont);
	//text("of", 133,66);
	fill(100,149,237);
	stroke(0,0,255);
	//text("You", 283,90);
	fill(0,206,209);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("?", 201,66);
	push();
	fill(0,0,205);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("so,", 263,66);
	pop();
	stroke(139,0,139);
	textFont(Melissa);
	//text("we", 353,114);
	fill(123,104,238);
	stroke(255,0,255);
	textFont(Diggity);
	//text("how", 38,169);
	fill(34,139,34);
	stroke(199,21,133);
	//text("sho", 87,66);
	fill(238,130,238);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("If", 225,66);
	fill(127,255,212);
	stroke(32,178,170);
	textFont(Diggity);
	//text("avoiding", 172,114);
	push();
	fill(255,99,71);
	stroke(199,21,133);
	textFont(Melissa);
	//text("yours,", 61,213);
	pop();
	stroke(34,139,34);
	textFont(RonsFont);
	//text("can", 444,66);
	fill(0,0,128);
	stroke(0,191,255);
	textFont(Diggity);
	//text("should", 377,114);
	fill(210,105,30);
	stroke(0,250,154);
	textFont(Ballpointprint);
	//text("much", 75,169);
	push();
	fill(205,133,63);
	stroke(139,69,19);
	textFont(Diggity);
	//text("not", 512,141);
	pop();
	fill(255,0,0);
	textFont(Diggity);
	//text("can", 175,169);
	fill(176,224,230);
	stroke(0,0,255);
	//text("take", 208,169);
	fill(255,255,0);
	stroke(128,0,128);
	textFont(Melissa);
	//text("sort", 91,141);
	fill(135,206,235);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("go", 426,114);
	push();
	fill(144,238,144);
	stroke(128,0,0);
	textFont(Melissa);
	//text("Daisy", 5,257);
	pop();
	fill(0,255,127);
	stroke(75,0,130);
	//text("out.", 183,141);
	push();
	fill(128,0,128);
	stroke(139,0,0);
	//text("are", 322,90);
	pop();
	fill(0,206,209);
	textFont(Diggity);
	//text("the", 362,169);
	fill(148,0,211);
	stroke(25,25,112);
	textFont(Ballpointprint);
	//text("you", 53,66);
	push();
	fill(144,238,144);
	stroke(0,0,205);
	//text("Bob,", 79,22);
	pop();
	fill(255,105,180);
	stroke(148,0,211);
	textFont(Melissa);
	//text("The", 262,169);
	push();
	fill(0,191,255);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("I", 156,169);
	pop();
	fill(152,251,152);
	//text("Forever", 9,213);
	fill(128,128,0);
	stroke(124,252,0);
	textFont(RonsFont);
	//text("our", 255,141);
	fill(255,0,255);
	stroke(0,0,255);
	textFont(Melissa);
	//text("sure", 7,169);
	fill(255,140,0);
	stroke(75,0,130);
	textFont(Ballpointprint);
	//text("these", 99,90);
	push();
	fill(222,184,135);
	stroke(255,255,0);
	//text("secrets,", 292,169);
	pop();
	fill(222,184,135);
	stroke(255,255,0);
	textFont(Diggity);
	//text("rt", 109,66);
	fill(255,127,80);
	stroke(154,205,50);
	textFont(Ballpointprint);
	//text("rh", 304,114);
	fill(178,34,34);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("Are", 12,66);


	fill(0,250,154);
	stroke(0,0,139);
	text("you", 134,114);
	text("delay", 225,90);
	push();


	fill(123,104,238);
	stroke(220,20,60);
	textFont(Diggity);
	//text("all", 163,141);
	pop();

	text("safe", 406,141);
	text("can", 312,66);
	text("break", 9,141);

	push();
	fill(0,128,128);
	stroke(124,252,0);
	textFont(Melissa);
	//text("more", 121,169);
	pop();

	text("guard", 387,90);
  
	fill(173,255,47);
	stroke(127,255,0);
	//text("s", 266,90);
	fill(205,133,63);
	stroke(178,34,34);
	//text("me", 231,114);
	fill(128,0,128);
	stroke(220,20,60);
	textFont(Ballpointprint);
	//text("no", 482,66);
	push();
	fill(0,128,128);
	stroke(0,100,0);
	textFont(Diggity);
	//text("silence.", 395,169);
	pop();
	fill(173,216,230);
	stroke(0,0,205);
	textFont(Melissa);
	//text("?", 250,169);
	fill(152,251,152);
	stroke(139,69,19);
	//text("a", 520,114);
	fill(219,112,147);
	stroke(32,178,170);
	textFont(Ballpointprint);
	//text("Pe", 281,114);
	fill(138,43,226);
	stroke(0,0,128);
	textFont(Melissa);
	//text("money", 159,66);


	fill(0,250,154);
	stroke(0,0,139);
	textFont(RonsFont);
	text("I", 293,66);


	fill(186,85,211);
	stroke(124,252,0);
	textFont(Diggity);
	//text("longer", 13,90);
	fill(72,209,204);
	stroke(210,105,30);
	textFont(Ballpointprint);
	//text("I'm", 462,141);
	fill(255,0,255);
	stroke(184,134,11);
	textFont(Melissa);
	//text("away", 451,114);
	push();
	fill(160,82,45);
	stroke(50,205,50);
	textFont(RonsFont);
	//text("ed", 444,90);
	pop();
	fill(255,0,0);
	textFont(RonsFont);
	//text("so", 361,90);
	fill(64,224,208);
	stroke(220,20,60);
	textFont(Ballpointprint);
	//text("Is", 221,141);
	push();
	fill(0,255,255);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("relationship", 298,141);
	pop();
	fill(147,112,219);
	stroke(139,0,139);
	textFont(Diggity);
	//text("send", 350,66);
	fill(0,0,255);
	stroke(210,105,30);
	textFont(Ballpointprint);
	//text("x", 44,257);
	fill(0,0,128);
	stroke(199,21,133);
	textFont(Diggity);
	//text("for", 489,114);
	fill(123,104,238);
	stroke(124,252,0);
	textFont(RonsFont);
	//text("this", 124,141);
	fill(255,255,0);
	stroke(50,205,50);
	textFont(Ballpointprint);
	//text("continual", 155,90);
	push();
	fill(255,215,0);
	stroke(218,165,32);
	//text("aps", 319,114);
	pop();
	fill(205,133,63);
	stroke(124,252,0);
	textFont(Diggity);
	//text("cash.", 390,66);



}
