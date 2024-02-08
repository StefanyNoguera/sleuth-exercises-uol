/*
Officer: 4098078
CaseNum: 601-3-83101368-4098078

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing MediumSlateBlue stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkBlue fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 70 pixels of any of the crimes within no more than 3 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- beginShape(), endShape(), vertex()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var caseyFry_record = {
	loc_x: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	loc_y: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordDate: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var attack_record_positionX = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var attack_record_positionY = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var attack_record_recordDate = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var attack_record_fatality = ['LOUISE ZETLAND', 'SUMMER CASIMERE', 'TAMICA MAUBERT', 'BRAD SILVEIRA', 'JACQUELINE DURANTS', 'NELSON TINTLE', 'LAKESHA SYMMES', 'DRUSILLA WARMAN', 'JESUS FORSLIN', 'LAVERNE JACQUELIN', 'JULIANA ADVERSANE', 'PIERRE DORCEY', 'NICOLE ASHELY', 'MALINDA GOODBURY', 'GAYLA WILLMAR'];


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
  // use a for loop to traverse the sightings, marking all of the locations on the map where she was last seen. Do this by drawing MediumSlateBlue stroke vertexes at each location.
  beginShape();
  stroke(123, 104, 238);
  for (let i = 0; i < caseyFry_record.loc_x.length; i++) {
    vertex(caseyFry_record.loc_x[i], caseyFry_record.loc_y[i]);
  }
  endShape();

  // Using another for loop to traverse the recent crime records, you should mark those locations on the map. Do this by drawing small, DarkBlue fill triangles centered over each location.
  for (let i = 0; i < attack_record_positionX.length; i++) {
    fill(0, 0, 139);
    noStroke();
    triangle(attack_record_positionX[i] - 5, attack_record_positionY[i] + 5, attack_record_positionX[i] + 5, attack_record_positionY[i] + 5, attack_record_positionX[i], attack_record_positionY[i] - 5);
  }

  // If she was within less than 70 pixels of any of the crimes within no more than 3 days of their occurrence then the details should be pushed to the list of possible matches with the following format.
  for (let i = 0; i < attack_record_positionX.length; i++) {
    for (let j = 0; j < caseyFry_record.loc_x.length; j++) {
      if (dist(attack_record_positionX[i], attack_record_positionY[i], caseyFry_record.loc_x[j], caseyFry_record.loc_y[j]) < 70 && abs(attack_record_recordDate[i] - caseyFry_record.recordDate[j]) <= 3) {
        possibleMatches.push({ crime: { x: attack_record_positionX[i], y: attack_record_positionY[i], victimName: attack_record_fatality[i] }, suspect: { x: caseyFry_record.loc_x[j], y: caseyFry_record.loc_y[j] } });
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
