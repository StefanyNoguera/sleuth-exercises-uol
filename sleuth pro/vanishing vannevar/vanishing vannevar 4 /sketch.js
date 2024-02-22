/*

Officer: 4098078
CaseNum: 702-3-63832889-4098078

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a green car with a licencePlate of UFVAMY.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthVehicleObject and the cars in
cars_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car()
{
	/*
	This function should do the following:
	 - increment sleuthVehicleObject's kmsAmnt property by its accelVal property
	 - add a random amount between -0.09 and 0.09 to sleuthVehicleObject's rumbleVal property
	 - use the constrain function to constrain sleuthVehicleObject's rumbleVal property to values between 0.06 and 1.09
	 - call the Cycle_CarMotor function passing sleuthVehicleObject as an argument
	*/
  sleuthVehicleObject.kmsAmnt += sleuthVehicleObject.accelVal;
  sleuthVehicleObject.rumbleVal += random(-0.09, 0.09);
  sleuthVehicleObject.rumbleVal = constrain(sleuthVehicleObject.rumbleVal, 0.06, 1.09);
  Cycle_CarMotor(sleuthVehicleObject);
}


function Swap_Lanes(vehicle)
{
	/*
	This function should do the following:
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePosition_a and lanePosition_b to effect the change.
	 - finally you should return vehicle at the end of the function.
	 hint: You will need to modify the xPosition property of vehicle.
	*/
  if (vehicle.xPosition === lanePosition_a) {
    vehicle.xPosition = lanePosition_b;
  }
  else {
    vehicle.xPosition = lanePosition_a;
  }
  return vehicle;
}


function SearchVehicle_Infront( target_car_a, target_car_b )
{
	/*
	This function should do the following:
	 - determine if target_car_a is in the same lane and less than 200px behind target_car_b.
	 - do this by comparing the two cars' kmsAmnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
  if (target_car_a.xPosition === target_car_b.xPosition) {
    if (target_car_a.kmsAmnt < target_car_b.kmsAmnt) {
      if (target_car_b.kmsAmnt - target_car_a.kmsAmnt < 200) {
        return true;
      }
    }
  }
  return false;
}


function CheckVehicle_IsParallel( car_obj_a, car_obj_b )
{
	/*
	This function should do the following:
	 - determine if car_obj_a is parallel with car_obj_b.
	 - if car_obj_a is found to be parallel to car_obj_b then return car_obj_b.
	 - cars are considered parallel if the absolute difference between their kmsAmnt properties is less than 25 px and they have non-matching xPosition properties	*/
  if (abs(car_obj_a.kmsAmnt - car_obj_b.kmsAmnt) < 25) {
    if (car_obj_a.xPosition !== car_obj_b.xPosition) {
      return car_obj_b;
    }
  }
}


function Identify_Assailant()
{
	/*
	This function should do the following:
	 - Check cars passing parallel to sleuthVehicleObject to see if they match the licencePlate property in the assailant description.
	 - it does this by traversing cars_array and calling CheckVehicle_IsParallel for each car
.	 - if a positive result is returned then the licencePlate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/

  for (var i = 0; i < cars_array.length; i++) {
    var car = CheckVehicle_IsParallel(sleuthVehicleObject, cars_array[i]);
    if (car) {
      if (car.licencePlate === "UFVAMY") {
        assailant = car;
      }
    }
  }
}


function Pursuing_Assailant()
{
	/*
	This function should do the following:
	 - only operate if the followingAssailant property of sleuthVehicleObject is true.
	 - scale the accelVal property of sleuthVehicleObject by a factor of 1.001.
	 - use the min function to make sure that sleuthVehicleObject's accelVal property does not exceed 6.
	 - it should traverse cars_array calling SearchVehicle_Infront for each car to detect any cars in front of sleuthVehicleObject.
	 - if a positive result is returned it should check to see if the licencePlate property of that car matches that of assailant.
	 - for a match, Stop_Assailant should be called, otherwise call Swap_Lanes.
	*/


    if (sleuthVehicleObject.followingAssailant) {
      sleuthVehicleObject.accelVal *= 1.001;
      sleuthVehicleObject.accelVal = Math.min(sleuthVehicleObject.accelVal, 6);
      for (var i = 0; i < cars_array.length; i++) {
        var car = SearchVehicle_Infront(sleuthVehicleObject, cars_array[i]);
        if (car) {
          if (car.licencePlate === "UFVAMY") {
            Stop_Assailant(sleuthVehicleObject);
          }
          else {
            Swap_Lanes(sleuthVehicleObject);
          }
        }
      }
    }
}


function Stop_Assailant(vehicle)
{
	/*
	This function should do the following:
	 - set the isApprehended property of vehicle to true.
	 - set the isApprehendingAssailant property of sleuthVehicleObject to true.
	 - set the accelVal properties of both vehicles to zero.
	*/
  vehicle.isApprehended = true;
  sleuthVehicleObject.isApprehendingAssailant = true;
  vehicle.accelVal = 0;
  sleuthVehicleObject.accelVal = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicleObject;

var roadWidth;
var roadLeftEdge;
var lanePosition_a;
var lanePosition_b;
var carImages = {};
var assailant;

var cars_array = [
{ xPosition: 300, yPosition: 0, kmsAmnt: -200, carModel: 'greenCar', licencePlate: 'FIYHPB', accelVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsAmnt: 200, carModel: 'blueCar', licencePlate: 'LZQELD', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 600, carModel: 'blueCar', licencePlate: 'C3IGJI', accelVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsAmnt: 1000, carModel: 'greenCar', licencePlate: 'AYN9WJ', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 1400, carModel: 'whiteCar', licencePlate: 'YBRDAA', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 1800, carModel: 'blueCar', licencePlate: '22SKLD', accelVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsAmnt: 2200, carModel: 'blueCar', licencePlate: 'VEWQE0', accelVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsAmnt: 2600, carModel: 'blueCar', licencePlate: 'SFEV4L', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 3000, carModel: 'greenCar', licencePlate: 'UFVAMY', accelVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsAmnt: 3400, carModel: 'blueCar', licencePlate: '11OED0', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 3800, carModel: 'blueCar', licencePlate: 'HENT00', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 4200, carModel: 'whiteCar', licencePlate: 'YHQJUX', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 4600, carModel: 'whiteCar', licencePlate: '45TBG5', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 5000, carModel: 'whiteCar', licencePlate: 'SN6DAE', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 5400, carModel: 'greenCar', licencePlate: 'C3YP15', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 5800, carModel: 'whiteCar', licencePlate: 'YYRM4V', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 6200, carModel: 'redCar', licencePlate: 'K97I2X', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 6600, carModel: 'redCar', licencePlate: '4URK7W', accelVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsAmnt: 7000, carModel: 'blueCar', licencePlate: '6ZL5BH', accelVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsAmnt: 7400, carModel: 'whiteCar', licencePlate: 'M7ERMX', accelVal: 2, exhaust: [  ]}
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
	lanePosition_a = 300;
	lanePosition_b = 500;

	sleuthVehicleObject =
	{
		xPosition: roadLeftEdge + roadWidth/4,
		yPosition: 550,
		kmsAmnt: 0,
		accelVal: 3,
		rumbleVal: 0,
		carModel: 'detective',
		licencePlate: '5L3UTH',
		isApprehendingAssailant: false,
		followingAssailant: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(assailant)
	{
		if(assailant.isApprehended)
		{
			fill(255);

			text("assailant isApprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!sleuthVehicleObject.followingAssailant&& !sleuthVehicleObject.isApprehendingAssailant)
	{
		Move_Car();
		for(var i = 0; i < cars_array.length; i++)
		{
var b2b = SearchVehicle_Infront(sleuthVehicleObject, cars_array[i]);
			if(b2b)Swap_Lanes(sleuthVehicleObject);
		}
		Identify_Assailant();
		if(assailant)sleuthVehicleObject.followingAssailant = true;
	}
	else if(!sleuthVehicleObject.isApprehendingAssailant)
	{
		Pursuing_Assailant();
		Move_Car();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(assailant)
	{
		if(!assailant.isApprehended)
		{
			assailant.accelVal = 5;
			for(var i = 0; i < cars_array.length; i++)
			{
				var b2b = SearchVehicle_Infront(assailant, cars_array[i]);
				if(b2b)
				{
					if(b2b.licencePlate != assailant.licencePlate)
					{
						Swap_Lanes(assailant);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < cars_array.length; i++)
	{
		cars_array[i].kmsAmnt += cars_array[i].accelVal;
		cars_array[i].yPosition = sleuthVehicleObject.yPosition - cars_array[i].kmsAmnt + sleuthVehicleObject.kmsAmnt;

		if(assailant)
		{
			if(assailant.isApprehended)
			{
				if(cars_array[i].xPosition==sleuthVehicleObject.xPosition)
				{
					if(cars_array[i].kmsAmnt<sleuthVehicleObject.kmsAmnt)
					{
						if(cars_array[i].kmsAmnt-sleuthVehicleObject.kmsAmnt < 200)
						{
							Swap_Lanes(cars_array[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthVehicleObject.kmsAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthVehicleObject.kmsAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(sleuthVehicleObject);
	image
	(
		carImages["detective"],
		sleuthVehicleObject.xPosition - carImages["detective"].width/2 + random(-sleuthVehicleObject.rumbleVal, sleuthVehicleObject.rumbleVal),
		sleuthVehicleObject.yPosition + random(-sleuthVehicleObject.rumbleVal, sleuthVehicleObject.rumbleVal)
	);

	//draw all other cars

	for(var i = 0; i < cars_array.length; i ++)
	{
		if(cars_array[i].yPosition < height && cars_array[i].yPosition > -height/2)
		{
			image(
			carImages[cars_array[i].carModel],
			cars_array[i].xPosition - carImages[cars_array[i].carModel].width/2,
			cars_array[i].yPosition
			);
			Cycle_CarMotor(cars_array[i]);

			drawExhaust(cars_array[i]);
		}
	}

}

function Cycle_CarMotor(car)
{

	car.exhaust.push({size: 2, x: car.xPosition, y: car.yPosition + carImages[car.carModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accelVal/3);
		if(car.carModel != "detective")car.exhaust[i].y += (sleuthVehicleObject.accelVal - car.accelVal);
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
