/*
Officer: 4098078
CaseNum: 601-1-85445911-4098078

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Chartreuse stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, YellowGreen fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var AbsconderLog = [
  { locX : 639, locY : 288},
  { locX : 681, locY : 286},
  { locX : 712, locY : 293},
  { locX : 756, locY : 310},
  { locX : 715, locY : 368},
  { locX : 701, locY : 425},
  { locX : 753, locY : 436},
  { locX : 815, locY : 468},
  { locX : 795, locY : 506},
  { locX : 788, locY : 497},
  { locX : 781, locY : 486},
  { locX : 768, locY : 489},
  { locX : 750, locY : 500},
  { locX : 732, locY : 506},
  { locX : 714, locY : 514},
  { locX : 695, locY : 531},
  { locX : 693, locY : 552},
  { locX : 654, locY : 523},
  { locX : 624, locY : 500},
  { locX : 594, locY : 484},
  { locX : 555, locY : 474}
];


//Recent crime records.

var IncidentData_coordinateX = [403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415, 561, 562, 751, 680, 626, 701, 838, 322, 468, 625];
var IncidentData_coordinateY = [401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225, 282, 392, 283, 359, 436, 455, 565, 508, 556, 737];


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
  for (var i = 0; i < AbsconderLog.length; i++){
    stroke(127, 255, 0);
    triangle(AbsconderLog[i].locX - 5, AbsconderLog[i].locY + 5, AbsconderLog[i].locX, AbsconderLog[i].locY - 5, AbsconderLog[i].locX + 5, AbsconderLog[i].locY + 5);
  }


}

//We are not using the draw function this time
