/*

Officer: 4098078
CaseNum: 401-2-93844735-4098078

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If insecticide dips below 0.74, or on the other hand, formaldehyde goes above 0.34 and arsenic dips below 0.41, decrease ethanol by 0.01
	- When strychnine dips below 0.36 or sarin dips below 0.58, increase ethanol by 0.02
	- If either arsenic dips below 0.37, methanol dips below 0.61, or perhaps insecticide dips below 0.44, decrease calcium_gluconate by 0.02
	- When formaldehyde goes above 0.73 and sarin dips below 0.72, increase calcium_gluconate by 0.04
	- When methanol goes above 0.69, or on the other hand, insecticide goes above 0.65 and sarin goes above 0.7, try decreasing antivenom by 0.03
	- When arsenic goes above 0.62 and strychnine dips below 0.71, try increasing antivenom by 0.03
	- If either sarin dips below 0.54, formaldehyde goes above 0.25, or perhaps methanol dips below 0.32, try decreasing sulphates by 0.02
	- If insecticide dips below 0.47 and arsenic goes above 0.51, increase sulphates by 0.05


Your conditional statements should consider the following poisons:

	- arsenic
	- sarin
	- formaldehyde
	- strychnine
	- methanol
	- insecticide


Your conditional statements should modify the following antidotes:

	- ethanol
	- calcium_gluconate
	- antivenom
	- sulphates


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var sarin;
var formaldehyde;
var strychnine;
var methanol;
var insecticide;


//Declare the antidote variables
var ethanol;
var calcium_gluconate;
var antivenom;
var sulphates;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	sarin = 0.5;
	formaldehyde = 0.5;
	strychnine = 0.5;
	methanol = 0.5;
	insecticide = 0.5;
	ethanol = 0.5;
	calcium_gluconate = 0.5;
	antivenom = 0.5;
	sulphates = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
  // - If insecticide dips below 0.74, or on the other hand, formaldehyde goes above 0.34 and arsenic dips below 0.41, decrease ethanol by 0.01
  if (insecticide < 0.74 || formaldehyde > 0.34 && arsenic < 0.41) {
    ethanol -= 0.01;
  }

	// - When strychnine dips below 0.36 or sarin dips below 0.58, increase ethanol by 0.02
  if (strychnine < 0.36 || sarin< 0.58) {
    ethanol += 0.02;
  }
	// - If either arsenic dips below 0.37, methanol dips below 0.61, or perhaps insecticide dips below 0.44, decrease calcium_gluconate by 0.02
  if (arsenic < 0.37 || methanol < 0.61 || insecticide < 0.44) {
    calcium_gluconate -= 0.02;
  }
	// - When formaldehyde goes above 0.73 and sarin dips below 0.72, increase calcium_gluconate by 0.04
  if (formaldehyde > 0.73 && sarin < 0.72) {
    calcium_gluconate += 0.04;
  }
	// - When methanol goes above 0.69, or on the other hand, insecticide goes above 0.65 and sarin goes above 0.7, try decreasing antivenom by 0.03
  if (methanol > 0.69 || insecticide > 0.65 && sarin > 0.7) {
    antivenom -= 0.03;
  }
	// - When arsenic goes above 0.62 and strychnine dips below 0.71, try increasing antivenom by 0.03
  if (arsenic > 0.62 && strychnine < 0.71) {
    antivenom += 0.03;
  }
	// - If either sarin dips below 0.54, formaldehyde goes above 0.25, or perhaps methanol dips below 0.32, try decreasing sulphates by 0.02
  if (sarin < 0.54 || formaldehyde > 0.25 || methanol < 0.32) {
    sulphates -= 0.02;
  }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	sarin = nextValue(graphs[1],sarin);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	strychnine = nextValue(graphs[3],strychnine);
	methanol = nextValue(graphs[4],methanol);
	insecticide = nextValue(graphs[5],insecticide);


	ethanol = constrain(ethanol, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	sulphates = constrain(sulphates, 0, 1);


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
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('methanol: ' + nf(methanol,1,2), 20,100);
	fill(colors[5]);
	text('insecticide: ' + nf(insecticide,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(calcium_gluconate,200,'calcium_gluconate');
	drawBar(antivenom,350,'antivenom');
	drawBar(sulphates,500,'sulphates');


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
