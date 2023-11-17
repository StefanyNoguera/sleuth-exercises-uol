/*

Officer: 4098078
CaseNum: 401-0-60963167-4098078

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When polonium dips below 0.59, decrease calcium_chloride by 0.04
	- If mercury goes above 0.25, try increasing calcium_chloride by 0.02
	- When alcohol goes above 0.27, reduce Sodium_Bicarbonate by 0.03
	- When mercury goes above 0.35, increment Sodium_Bicarbonate by 0.04
	- If polonium goes above 0.69, decrease aspirin by 0.04
	- If mercury goes above 0.45, raise aspirin by 0.04


Your conditional statements should consider the following poisons:

	- mercury
	- alcohol
	- polonium


Your conditional statements should modify the following antidotes:

	- calcium_chloride
	- Sodium_Bicarbonate
	- aspirin


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var mercury;
var alcohol;
var polonium;


//Declare the antidote variables
var calcium_chloride;
var Sodium_Bicarbonate;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	alcohol = 0.5;
	polonium = 0.5;
	calcium_chloride = 0.5;
	Sodium_Bicarbonate = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{
  if (polonium < 0.59) {
    calcium_chloride -= 0.04;
  }

  if (polonium > 0.69) {
    aspirin -= 0.04;
  }

  if (mercury > 0.25) {
    calcium_chloride += 0.02;
  }

  if (mercury > 0.35) {
    Sodium_Bicarbonate += 0.04;
  }

  if (mercury > 0.45) {
    aspirin += 0.04;
  }

  if (alcohol > 0.27) {
    Sodium_Bicarbonate -= 0.03;
  }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	alcohol = nextValue(graphs[1],alcohol);
	polonium = nextValue(graphs[2],polonium);


	calcium_chloride = constrain(calcium_chloride, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('mercury: ' + nf(mercury,1,2), 20,20);
	fill(colors[1]);
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(calcium_chloride,50,'calcium_chloride');
	drawBar(Sodium_Bicarbonate,200,'Sodium_Bicarbonate');
	drawBar(aspirin,350,'aspirin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
