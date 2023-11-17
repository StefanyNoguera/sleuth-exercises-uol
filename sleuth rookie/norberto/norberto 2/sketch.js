/*
Officer: 4098078
CaseNum: 401-1-67869614-4098078

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When methanol goes above 0.36, try decreasing protamine by 0.01
	- When sarin dips below 0.4, increase protamine by 0.03
	- If AmanitaMushrooms dips below 0.29 or warfarin dips below 0.69, decrease HydrochloricAcid by 0.02
	- When methanol goes above 0.25 or sarin dips below 0.34, increase HydrochloricAcid by 0.01
	- When AmanitaMushrooms dips below 0.71 or methanol dips below 0.67, decrement antivenom by 0.05
	- When sarin goes above 0.28 and warfarin goes above 0.56, increase antivenom by 0.04
	- When AmanitaMushrooms goes above 0.47, reduce antitoxin by 0.05
	- When warfarin goes above 0.44, try increasing antitoxin by 0.05


Your conditional statements should consider the following poisons:

	- methanol
	- warfarin
	- sarin
	- AmanitaMushrooms


Your conditional statements should modify the following antidotes:

	- protamine
	- HydrochloricAcid
	- antivenom
	- antitoxin


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var methanol;
var warfarin;
var sarin;
var AmanitaMushrooms;


//Declare the antidote variables
var protamine;
var HydrochloricAcid;
var antivenom;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	warfarin = 0.5;
	sarin = 0.5;
	AmanitaMushrooms = 0.5;
	protamine = 0.5;
	HydrochloricAcid = 0.5;
	antivenom = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
  /*
  - When methanol goes above 0.36, try decreasing protamine by 0.01
	- When sarin dips below 0.4, increase protamine by 0.03
	- If AmanitaMushrooms dips below 0.29 or warfarin dips below 0.69, decrease HydrochloricAcid by 0.02
	- When methanol goes above 0.25 or sarin dips below 0.34, increase HydrochloricAcid by 0.01
	- When AmanitaMushrooms dips below 0.71 or methanol dips below 0.67, decrement antivenom by 0.05
	- When sarin goes above 0.28 and warfarin goes above 0.56, increase antivenom by 0.04
	- When AmanitaMushrooms goes above 0.47, reduce antitoxin by 0.05
	- When warfarin goes above 0.44, try increasing antitoxin by 0.05*/

  if (methanol > 0.36) {
    protamine -= 0.01;
  }

  if (sarin < 0.4) {
    protamine += 0.03;
  }




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	warfarin = nextValue(graphs[1],warfarin);
	sarin = nextValue(graphs[2],sarin);
	AmanitaMushrooms = nextValue(graphs[3],AmanitaMushrooms);


	protamine = constrain(protamine, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(protamine,50,'protamine');
	drawBar(HydrochloricAcid,200,'HydrochloricAcid');
	drawBar(antivenom,350,'antivenom');
	drawBar(antitoxin,500,'antitoxin');


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
