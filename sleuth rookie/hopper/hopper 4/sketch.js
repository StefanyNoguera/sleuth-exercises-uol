/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 4098078
CaseNum: 201-3-47356898-4098078

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below

    beginShape();
    vertex(715, 450);
    vertex(555, 495);
    vertex(540, 400);
    vertex(590, 390);
    vertex(575, 345);
    vertex(477, 230);
    vertex(465, 150);
    vertex(544, 76);
    vertex(589, 135);
    vertex(652, 247);
    vertex(676, 315);
    vertex(705, 340);
    vertex(805, 270);
    vertex(850, 270);
    vertex(855, 300);
    

    endShape(CLOSE);



    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
