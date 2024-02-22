/*
801
Stage 1: Rigoletto

Officer: 4098078
CaseNum: 801-0-39219342-4098078

At the rotten core of Console City are a series of secretive orders who pull all the criminal strings. If we get to them we can clean up this town for good.

Now we have a chance - the Order of The Knuth's will be at the command performance of Rigoletto at the console city Opera house tonight. Our person on the inside is working the box office. We’ve got intell and access to the lighting desk.

- Set the spotlights to shine on the members of the order.
- Do this by setting the selected  property of the element in operaBuffs to true.
- We know that one member of the order is seated in the 3rd row, 5th seat
- But you can identify the other 7 members of the order by their trademark scarf.

There are many ways to complete the case but you should only use operaBuffs[#][#] to update the property.


*/

var crowdImg;
var spotlight;

var operaBuffs = [ [ { x: 50, y: 50, selected: false} , { x: 150, y: 50, selected: false} , { x: 250, y: 50, selected: false} , { x: 350, y: 50, selected: false} , { x: 450, y: 50, selected: false} , { x: 550, y: 50, selected: false} , { x: 650, y: 50, selected: false} , { x: 750, y: 50, selected: false} , { x: 850, y: 50, selected: false} , { x: 950, y: 50, selected: false}  ], [ { x: 50, y: 140, selected: false} , { x: 150, y: 140, selected: false} , { x: 250, y: 140, selected: false} , { x: 350, y: 140, selected: false} , { x: 450, y: 140, selected: false} , { x: 550, y: 140, selected: false} , { x: 650, y: 140, selected: false} , { x: 750, y: 140, selected: false} , { x: 850, y: 140, selected: false} , { x: 950, y: 140, selected: false}  ], [ { x: 50, y: 230, selected: false} , { x: 150, y: 230, selected: false} , { x: 250, y: 230, selected: false} , { x: 350, y: 230, selected: false} , { x: 450, y: 230, selected: false} , { x: 550, y: 230, selected: false} , { x: 650, y: 230, selected: false} , { x: 750, y: 230, selected: false} , { x: 850, y: 230, selected: false} , { x: 950, y: 230, selected: false}  ], [ { x: 50, y: 320, selected: false} , { x: 150, y: 320, selected: false} , { x: 250, y: 320, selected: false} , { x: 350, y: 320, selected: false} , { x: 450, y: 320, selected: false} , { x: 550, y: 320, selected: false} , { x: 650, y: 320, selected: false} , { x: 750, y: 320, selected: false} , { x: 850, y: 320, selected: false} , { x: 950, y: 320, selected: false}  ], [ { x: 50, y: 410, selected: false} , { x: 150, y: 410, selected: false} , { x: 250, y: 410, selected: false} , { x: 350, y: 410, selected: false} , { x: 450, y: 410, selected: false} , { x: 550, y: 410, selected: false} , { x: 650, y: 410, selected: false} , { x: 750, y: 410, selected: false} , { x: 850, y: 410, selected: false} , { x: 950, y: 410, selected: false}  ], [ { x: 50, y: 500, selected: false} , { x: 150, y: 500, selected: false} , { x: 250, y: 500, selected: false} , { x: 350, y: 500, selected: false} , { x: 450, y: 500, selected: false} , { x: 550, y: 500, selected: false} , { x: 650, y: 500, selected: false} , { x: 750, y: 500, selected: false} , { x: 850, y: 500, selected: false} , { x: 950, y: 500, selected: false}  ], [ { x: 50, y: 590, selected: false} , { x: 150, y: 590, selected: false} , { x: 250, y: 590, selected: false} , { x: 350, y: 590, selected: false} , { x: 450, y: 590, selected: false} , { x: 550, y: 590, selected: false} , { x: 650, y: 590, selected: false} , { x: 750, y: 590, selected: false} , { x: 850, y: 590, selected: false} , { x: 950, y: 590, selected: false}  ], [ { x: 50, y: 680, selected: false} , { x: 150, y: 680, selected: false} , { x: 250, y: 680, selected: false} , { x: 350, y: 680, selected: false} , { x: 450, y: 680, selected: false} , { x: 550, y: 680, selected: false} , { x: 650, y: 680, selected: false} , { x: 750, y: 680, selected: false} , { x: 850, y: 680, selected: false} , { x: 950, y: 680, selected: false}  ], [ { x: 50, y: 770, selected: false} , { x: 150, y: 770, selected: false} , { x: 250, y: 770, selected: false} , { x: 350, y: 770, selected: false} , { x: 450, y: 770, selected: false} , { x: 550, y: 770, selected: false} , { x: 650, y: 770, selected: false} , { x: 750, y: 770, selected: false} , { x: 850, y: 770, selected: false} , { x: 950, y: 770, selected: false}  ], [ { x: 50, y: 860, selected: false} , { x: 150, y: 860, selected: false} , { x: 250, y: 860, selected: false} , { x: 350, y: 860, selected: false} , { x: 450, y: 860, selected: false} , { x: 550, y: 860, selected: false} , { x: 650, y: 860, selected: false} , { x: 750, y: 860, selected: false} , { x: 850, y: 860, selected: false} , { x: 950, y: 860, selected: false}  ] ];

function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}



function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
//   Now we have a chance - the Order of The Knuth's will be at the command performance of Rigoletto at the console city Opera house tonight. Our person on the inside is working the box office. We’ve got intell and access to the lighting desk.

// - Set the spotlights to shine on the members of the order.
// - Do this by setting the selected  property of the element in operaBuffs to true.
// - We know that one member of the order is seated in the 3rd row, 5th seat
// - But you can identify the other 7 members of the order by their trademark scarf.

// There are many ways to complete the case but you should only use operaBuffs[#][#] to update the property.

  operaBuffs[2][4].selected = true;
  operaBuffs[2][3].selected = true;
  operaBuffs[0][6].selected = true;
  operaBuffs[6][7].selected = true;
  operaBuffs[7][4].selected = true;
  operaBuffs[8][5].selected = true;
  operaBuffs[8][6].selected = true;
  operaBuffs[8][8].selected = true;


	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < operaBuffs.length; i++)
	{
		for (var j = 0; j < operaBuffs[i].length; j++)
		{
			if (operaBuffs[i][j].selected)
			{
				image(spotlight, operaBuffs[i][j].x, operaBuffs[i][j].y, 100 , 100 );
			}
		}
	}
}
