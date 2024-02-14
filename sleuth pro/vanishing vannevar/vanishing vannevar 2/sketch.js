/*

Officer: 4098078
CaseNum: 702-1-23716542-4098078

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthPI_car and the cars in
carObject_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPI_car's miles_driven property by its speed_val property 
	 - add a random amount between -0.05 and 0.05 to sleuthPI_car's vibrate_value property
	 - use the constrain function to constrain sleuthPI_car's vibrate_value property to values between 0.04 and 1.07
	 - call the runCar_motor function passing sleuthPI_car as an argument
	*/
}


function moveLanes(vehicle)
{
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoord_a and LaneCoord_b to effect the change.
	 hint: You will need to modify the position_x property of vehicle.
	*/
}


function checkAhead( targetVehicle )
{
	/*
	This function should do the following: 
	 - determine if targetVehicle is in the same lane and less than 200px behind any of the cars in carObject_array.
	 - do this by traversing carObject_array and comparing each car's miles_driven property to that of targetVehicle.
	 - if you find a car that matches these requirements then return the number_plate property for the car. Otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_car;

var roadWidth;
var roadLeftEdge;
var LaneCoord_a;
var LaneCoord_b;
var carImages = {};

var carObject_array = [
{ position_x: 300, position_y: 0, miles_driven: -200, car_variety: 'greenCar', number_plate: '0X3A5K', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 200, car_variety: 'redCar', number_plate: 'RBDWN4', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 600, car_variety: 'whiteCar', number_plate: 'TTZDNB', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 1000, car_variety: 'greenCar', number_plate: 'T7VCCE', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 1400, car_variety: 'whiteCar', number_plate: 'A57UIH', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 1800, car_variety: 'whiteCar', number_plate: 'PZ1SF2', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 2200, car_variety: 'whiteCar', number_plate: 'NCVOQ1', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 2600, car_variety: 'greenCar', number_plate: 'DG84JG', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 3000, car_variety: 'redCar', number_plate: 'O9OYYA', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 3400, car_variety: 'redCar', number_plate: 'I1LJL0', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 3800, car_variety: 'blueCar', number_plate: 'WEGKL6', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 4200, car_variety: 'greenCar', number_plate: 'O26MP9', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 4600, car_variety: 'redCar', number_plate: 'QYXCJD', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 5000, car_variety: 'blueCar', number_plate: 'HV64M3', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 5400, car_variety: 'blueCar', number_plate: 'AHOKZN', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 5800, car_variety: 'whiteCar', number_plate: 'Q9I4QH', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 6200, car_variety: 'redCar', number_plate: 'LJXB66', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 6600, car_variety: 'redCar', number_plate: '5CRDGD', speed_val: 2, exhaust: [  ]} , { position_x: 300, position_y: 0, miles_driven: 7000, car_variety: 'redCar', number_plate: 'SM2BXB', speed_val: 2, exhaust: [  ]} , { position_x: 500, position_y: 0, miles_driven: 7400, car_variety: 'redCar', number_plate: '70D2VV', speed_val: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoord_a = 300;
	LaneCoord_b = 500;

	sleuthPI_car = 
	{
		position_x: roadLeftEdge + roadWidth/4,
		position_y: 550,
		miles_driven: 0,
		speed_val: 3,
		vibrate_value: 0,
		car_variety: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	driveVehicle();
	var b2b = checkAhead( sleuthPI_car );
	if(b2b)moveLanes(sleuthPI_car);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObject_array.length; i++)
	{
		carObject_array[i].miles_driven += carObject_array[i].speed_val;
		carObject_array[i].position_y = sleuthPI_car.position_y - carObject_array[i].miles_driven + sleuthPI_car.miles_driven;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPI_car.miles_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPI_car.miles_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPI_car);
	image
	(
		carImages["detective"],
		sleuthPI_car.position_x - carImages["detective"].width/2 + random(-sleuthPI_car.vibrate_value, sleuthPI_car.vibrate_value),
		sleuthPI_car.position_y + random(-sleuthPI_car.vibrate_value, sleuthPI_car.vibrate_value)
	);

	//draw all other cars

	for(var i = 0; i < carObject_array.length; i ++)
	{
		if(carObject_array[i].position_y < height && carObject_array[i].position_y > -height/2)
		{
			image(
			carImages[carObject_array[i].car_variety],
			carObject_array[i].position_x - carImages[carObject_array[i].car_variety].width/2,
			carObject_array[i].position_y
			);
			runCar_motor(carObject_array[i]);

			drawExhaust(carObject_array[i]);
		}
	}

}

function runCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.position_x, y: car.position_y + carImages[car.car_variety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speed_val/3);
		if(car.car_variety != "detective")car.exhaust[i].y += (sleuthPI_car.speed_val - car.speed_val);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
