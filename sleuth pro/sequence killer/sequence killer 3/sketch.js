/*
Officer: 4098078
CaseNum: 601-2-20953642-4098078

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Olive stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkRed fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 48 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Casey_Sighted = [
  { position_x : 639, position_y : 288},
  { position_x : 681, position_y : 286},
  { position_x : 712, position_y : 293},
  { position_x : 756, position_y : 310},
  { position_x : 715, position_y : 368},
  { position_x : 701, position_y : 425},
  { position_x : 753, position_y : 436},
  { position_x : 815, position_y : 468},
  { position_x : 795, position_y : 506},
  { position_x : 788, position_y : 497},
  { position_x : 781, position_y : 486},
  { position_x : 768, position_y : 489},
  { position_x : 750, position_y : 500},
  { position_x : 732, position_y : 506},
  { position_x : 714, position_y : 514},
  { position_x : 695, position_y : 531},
  { position_x : 693, position_y : 552},
  { position_x : 654, position_y : 523},
  { position_x : 624, position_y : 500},
  { position_x : 594, position_y : 484},
  { position_x : 555, position_y : 474}
];


//Recent crime records.

var Murderscene_Recorded = {
	Loc_X: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	Loc_Y: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	Fatality_: ['LARRAINE PEGORD', 'GAYLA WILLMAR', 'LOUISE ZETLAND', 'JESUS FORSLIN', 'TU DAVISWOOD', 'NICOLE ASHELY', 'TAMICA MAUBERT', 'LAKESHA SYMMES', 'NELSON TINTLE', 'MALINDA GOODBURY', 'BRIDGET BROADVIEW', 'DRUSILLA WARMAN', 'HANG NIEMELA', 'RANDEE CROME'],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
  stroke(128, 128, 0);
  beginShape();
  for (let i = 0; i < Casey_Sighted.length; i++) {
    vertex(Casey_Sighted[i].position_x, Casey_Sighted[i].position_y);
  }
  endShape();

  fill(139, 0, 0);
  noStroke();
  for (let i = 0; i < Murderscene_Recorded.Loc_X.length; i++) {
    rect(Murderscene_Recorded.Loc_X[i], Murderscene_Recorded.Loc_Y[i], 10, 10);
  }

  for (let i = 0; i < Casey_Sighted.length; i++) {
    for (let j = 0; j < Murderscene_Recorded.Loc_X.length; j++) {
      if (dist(Casey_Sighted[i].position_x, Casey_Sighted[i].position_y, Murderscene_Recorded.Loc_X[j], Murderscene_Recorded.Loc_Y[j]) < 48) {
        possibleMatches.push({crime:{x: Murderscene_Recorded.Loc_X[j], y: Murderscene_Recorded.Loc_Y[j], victimName: Murderscene_Recorded.Fatality_[j]}, suspect:{x: Casey_Sighted[i].position_x, y: Casey_Sighted[i].position_y}});
      }
    }
  }


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
