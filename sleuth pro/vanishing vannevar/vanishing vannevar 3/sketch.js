/*

Officer: 4098078
CaseNum: 702-2-62858404-4098078

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a green car with a number_plate of PCNUO3. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_carObject and the cars in
vehicleObjects_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveCar()
{
	/*
	This function should do the following:
	 - increment detective_carObject's dist_driven property by its gas_val property
	 - add a random amount between -0.01 and 0.01 to detective_carObject's vibrate_val property
	 - use the constrain function to constrain detective_carObject's vibrate_val property to values between 0.09 and 0.97
	 - call the turnoverCarEngine function passing detective_carObject as an argument
	*/
  detective_carObject.dist_driven += detective_carObject.gas_val;
  detective_carObject.vibrate_val += random(-0.01, 0.01);
  detective_carObject.vibrate_val = constrain(detective_carObject.vibrate_val, 0.09, 0.97);
  turnoverCarEngine(detective_carObject);
}


function moveLanes(target_vehicle)
{
	/*
	This function should do the following:
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_pos_a and lane_pos_b to effect the change.
	 hint: You will need to modify the x property of target_vehicle.
	*/
  if (target_vehicle.x === lane_pos_a) {
    target_vehicle.x = lane_pos_b;
  }
  else {
    target_vehicle.x = lane_pos_a;
  }
}


function vehicleInfront( vehicle_a, vehicle_b )
{
	/*
	This function should do the following:
	 - determine if vehicle_a is in the same lane and less than 200px behind vehicle_b.
	 - do this by comparing the two cars' dist_driven properties
	 - if these requirements are met then return the number_plate property for vehicle_b. Otherwise return false.
	*/
  if (vehicle_a.x === vehicle_b.x && vehicle_a.dist_driven < vehicle_b.dist_driven - 200) {
    return vehicle_b.number_plate;
  }
  else {
    return false;
  }
}


function vehicleAtSide( target_car )
{
	/*
	This function should do the following:
	 - traverse vehicleObjects_list and determine if any of the cars are parallel with target_car.
	 - if a car is found to be parallel to target_car then return that car object.
	 - cars are considered parallel if the absolute difference between their dist_driven properties is less than 25 px and they have non-matching x properties	*/
}


function identifySuspect()
{
	/*
	This function should do the following:
	 - Check cars passing parallel to detective_carObject to see if they match the number_plate property in the suspect description.
	 - it does this by calling vehicleAtSide.
	 - if a positive result is returned then the number_plate property of the found car is then checked against the suspect description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_carObject;

var roadWidth;
var roadLeftEdge;
var lane_pos_a;
var lane_pos_b;
var carImages = {};
var suspect;

var vehicleObjects_list = [
{ x: 500, y: 0, dist_driven: -200, car_classification: 'whiteCar', number_plate: 'WRLAIA', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 200, car_classification: 'greenCar', number_plate: 'RGPM9D', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 600, car_classification: 'blueCar', number_plate: 'LHCOTV', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 1000, car_classification: 'redCar', number_plate: 'FRLNG9', gas_val: 2, exhaust: [  ]} , { x: 300, y: 0, dist_driven: 1400, car_classification: 'blueCar', number_plate: '9CGGZW', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 1800, car_classification: 'greenCar', number_plate: 'B27IXW', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 2200, car_classification: 'whiteCar', number_plate: 'MDGQ5U', gas_val: 2, exhaust: [  ]} , { x: 300, y: 0, dist_driven: 2600, car_classification: 'greenCar', number_plate: 'YR8OUO', gas_val: 2, exhaust: [  ]} , { x: 300, y: 0, dist_driven: 3000, car_classification: 'greenCar', number_plate: 'PCNUO3', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 3400, car_classification: 'redCar', number_plate: 'M3JJTL', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 3800, car_classification: 'blueCar', number_plate: 'LUZD4O', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 4200, car_classification: 'blueCar', number_plate: '5S10YK', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 4600, car_classification: 'whiteCar', number_plate: 'NAB36I', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 5000, car_classification: 'whiteCar', number_plate: 'YT8Y1E', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 5400, car_classification: 'whiteCar', number_plate: 'B8KE2X', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 5800, car_classification: 'whiteCar', number_plate: 'Y322JB', gas_val: 2, exhaust: [  ]} , { x: 300, y: 0, dist_driven: 6200, car_classification: 'whiteCar', number_plate: '6GXSM6', gas_val: 2, exhaust: [  ]} , { x: 300, y: 0, dist_driven: 6600, car_classification: 'whiteCar', number_plate: 'CJFGWM', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 7000, car_classification: 'greenCar', number_plate: '1N2U6U', gas_val: 2, exhaust: [  ]} , { x: 500, y: 0, dist_driven: 7400, car_classification: 'redCar', number_plate: 'HZZ919', gas_val: 2, exhaust: [  ]}
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
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_pos_a = 300;
	lane_pos_b = 500;

	detective_carObject =
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		dist_driven: 0,
		gas_val: 3,
		vibrate_val: 0,
		car_classification: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(suspect)
	{
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	driveCar();
	for(var i = 0; i < vehicleObjects_list.length; i++)
	{
var b2b = vehicleInfront(detective_carObject, vehicleObjects_list[i]);
		if(b2b)moveLanes(detective_carObject);
	}
	var a = identifySuspect();
	if(a != false)suspect = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleObjects_list.length; i++)
	{
		vehicleObjects_list[i].dist_driven += vehicleObjects_list[i].gas_val;
		vehicleObjects_list[i].y = detective_carObject.y - vehicleObjects_list[i].dist_driven + detective_carObject.dist_driven;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (detective_carObject.dist_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detective_carObject.dist_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(detective_carObject);
	image
	(
		carImages["detective"],
		detective_carObject.x - carImages["detective"].width/2 + random(-detective_carObject.vibrate_val, detective_carObject.vibrate_val),
		detective_carObject.y + random(-detective_carObject.vibrate_val, detective_carObject.vibrate_val)
	);

	//draw all other cars

	for(var i = 0; i < vehicleObjects_list.length; i ++)
	{
		if(vehicleObjects_list[i].y < height && vehicleObjects_list[i].y > -height/2)
		{
			image(
			carImages[vehicleObjects_list[i].car_classification],
			vehicleObjects_list[i].x - carImages[vehicleObjects_list[i].car_classification].width/2,
			vehicleObjects_list[i].y
			);
			turnoverCarEngine(vehicleObjects_list[i]);

			drawExhaust(vehicleObjects_list[i]);
		}
	}

}

function turnoverCarEngine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.car_classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_val/3);
		if(car.car_classification != "detective")car.exhaust[i].y += (detective_carObject.gas_val - car.gas_val);
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
