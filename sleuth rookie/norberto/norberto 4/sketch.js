/*

Officer: 4098078
CaseNum: 401-3-31272593-4098078

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When either strychnine goes above 0.68, insecticide goes above 0.51, methanol dips below 0.64, or perhaps spiderVenom dips below 0.26, decrease insulin by 0.05
	- When sarin goes above 0.36 and SnakeVenom goes above 0.54, or on the other hand, mercury dips below 0.33 or chlorine dips below 0.41, increment insulin by 0.04
	- If insecticide goes above 0.65 or strychnine dips below 0.65, whilst at the same time, spiderVenom goes above 0.67 or mercury dips below 0.67, decrement sulphates by 0.04
	- When chlorine goes above 0.42 and sarin goes above 0.3, whilst at the same time, SnakeVenom dips below 0.68 or methanol dips below 0.29, raise sulphates by 0.02
	- If strychnine goes above 0.75 and SnakeVenom dips below 0.71, whilst at the same time, spiderVenom goes above 0.61 or chlorine goes above 0.75, decrement antibodies by 0.02
	- If mercury dips below 0.75 and methanol dips below 0.69, whilst at the same time, insecticide goes above 0.55 or sarin goes above 0.68, increment antibodies by 0.02
	- If insecticide dips below 0.61, whilst at the same time, SnakeVenom dips below 0.41 or spiderVenom dips below 0.38, try decreasing plasma by 0.05
	- If sarin dips below 0.63, or on the other hand, mercury dips below 0.5 and methanol goes above 0.66, increment plasma by 0.01
	- When either chlorine goes above 0.63, strychnine dips below 0.62, or perhaps methanol goes above 0.27, decrease sodiumBicarbonate by 0.05
	- If either sarin goes above 0.44, mercury dips below 0.35, or perhaps insecticide goes above 0.74, increase sodiumBicarbonate by 0.04


Your conditional statements should consider the following poisons:

	- insecticide
	- sarin
	- chlorine
	- methanol
	- SnakeVenom
	- strychnine
	- spiderVenom
	- mercury


Your conditional statements should modify the following antidotes:

	- insulin
	- sulphates
	- antibodies
	- plasma
	- sodiumBicarbonate


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
var insecticide;
var sarin;
var chlorine;
var methanol;
var SnakeVenom;
var strychnine;
var spiderVenom;
var mercury;


//Declare the antidote variables
var insulin;
var sulphates;
var antibodies;
var plasma;
var sodiumBicarbonate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	sarin = 0.5;
	chlorine = 0.5;
	methanol = 0.5;
	SnakeVenom = 0.5;
	strychnine = 0.5;
	spiderVenom = 0.5;
	mercury = 0.5;
	insulin = 0.5;
	sulphates = 0.5;
	antibodies = 0.5;
	plasma = 0.5;
	sodiumBicarbonate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

  //- When either strychnine goes above 0.68, insecticide goes above 0.51, methanol dips below 0.64, or perhaps spiderVenom dips below 0.26, decrease insulin by 0.05
  if (strychnine > 0.68 || insecticide > 0.51 || methanol < 0.64 || spiderVenom < 0.26) {
    insulin -= 0.05;
  }
	//- When sarin goes above 0.36 and SnakeVenom goes above 0.54, or on the other hand, mercury dips below 0.33 or chlorine dips below 0.41, increment insulin by 0.04
  if (sarin > 0.36 && SnakeVenom > 0.54 || mercury < 0.33 || chlorine < 0.41) {
    insulin += 0.04;
  }
	//- If insecticide goes above 0.65 or strychnine dips below 0.65, whilst at the same time, spiderVenom goes above 0.67 or mercury dips below 0.67, decrement sulphates by 0.04
	//- When chlorine goes above 0.42 and sarin goes above 0.3, whilst at the same time, SnakeVenom dips below 0.68 or methanol dips below 0.29, raise sulphates by 0.02
	//- If strychnine goes above 0.75 and SnakeVenom dips below 0.71, whilst at the same time, spiderVenom goes above 0.61 or chlorine goes above 0.75, decrement antibodies by 0.02
	//- If mercury dips below 0.75 and methanol dips below 0.69, whilst at the same time, insecticide goes above 0.55 or sarin goes above 0.68, increment antibodies by 0.02
	//- If insecticide dips below 0.61, whilst at the same time, SnakeVenom dips below 0.41 or spiderVenom dips below 0.38, try decreasing plasma by 0.05
	//- If sarin dips below 0.63, or on the other hand, mercury dips below 0.5 and methanol goes above 0.66, increment plasma by 0.01
	//- When either chlorine goes above 0.63, strychnine dips below 0.62, or perhaps methanol goes above 0.27, decrease sodiumBicarbonate by 0.05
	//- If either sarin goes above 0.44, mercury dips below 0.35, or perhaps insecticide goes above 0.74, increase sodiumBicarbonate by 0.04



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	sarin = nextValue(graphs[1],sarin);
	chlorine = nextValue(graphs[2],chlorine);
	methanol = nextValue(graphs[3],methanol);
	SnakeVenom = nextValue(graphs[4],SnakeVenom);
	strychnine = nextValue(graphs[5],strychnine);
	spiderVenom = nextValue(graphs[6],spiderVenom);
	mercury = nextValue(graphs[7],mercury);


	insulin = constrain(insulin, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	plasma = constrain(plasma, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('chlorine: ' + nf(chlorine,1,2), 20,60);
	fill(colors[3]);
	text('methanol: ' + nf(methanol,1,2), 20,80);
	fill(colors[4]);
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,100);
	fill(colors[5]);
	text('strychnine: ' + nf(strychnine,1,2), 20,120);
	fill(colors[6]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,140);
	fill(colors[7]);
	text('mercury: ' + nf(mercury,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(sulphates,200,'sulphates');
	drawBar(antibodies,350,'antibodies');
	drawBar(plasma,500,'plasma');
	drawBar(sodiumBicarbonate,650,'sodiumBicarbonate');


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
