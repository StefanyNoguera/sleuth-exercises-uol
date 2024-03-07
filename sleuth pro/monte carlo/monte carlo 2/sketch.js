/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 4098078
CaseNum: 802-1-47560571-4098078

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called shuffle_seed.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 10 and 73.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array
- Call shuffle_seed in setup.
- Call Shuffle deck using the return value from shuffle_seed as the argument.

*/

var card_deck = [ { card_suit: 'Spades', n: 'A'} , { card_suit: 'Spades', n: '2'} , { card_suit: 'Spades', n: '3'} , { card_suit: 'Spades', n: '4'} , { card_suit: 'Spades', n: '5'} , { card_suit: 'Spades', n: '6'} , { card_suit: 'Spades', n: '7'} , { card_suit: 'Spades', n: '8'} , { card_suit: 'Spades', n: '9'} , { card_suit: 'Spades', n: '10'} , { card_suit: 'Spades', n: 'J'} , { card_suit: 'Spades', n: 'Q'} , { card_suit: 'Spades', n: 'K'} , { card_suit: 'Clubs', n: 'A'} , { card_suit: 'Clubs', n: '2'} , { card_suit: 'Clubs', n: '3'} , { card_suit: 'Clubs', n: '4'} , { card_suit: 'Clubs', n: '5'} , { card_suit: 'Clubs', n: '6'} , { card_suit: 'Clubs', n: '7'} , { card_suit: 'Clubs', n: '8'} , { card_suit: 'Clubs', n: '9'} , { card_suit: 'Clubs', n: '10'} , { card_suit: 'Clubs', n: 'J'} , { card_suit: 'Clubs', n: 'Q'} , { card_suit: 'Clubs', n: 'K'} , { card_suit: 'Hearts', n: 'A'} , { card_suit: 'Hearts', n: '2'} , { card_suit: 'Hearts', n: '3'} , { card_suit: 'Hearts', n: '4'} , { card_suit: 'Hearts', n: '5'} , { card_suit: 'Hearts', n: '6'} , { card_suit: 'Hearts', n: '7'} , { card_suit: 'Hearts', n: '8'} , { card_suit: 'Hearts', n: '9'} , { card_suit: 'Hearts', n: '10'} , { card_suit: 'Hearts', n: 'J'} , { card_suit: 'Hearts', n: 'Q'} , { card_suit: 'Hearts', n: 'K'} , { card_suit: 'Diamonds', n: 'A'} , { card_suit: 'Diamonds', n: '2'} , { card_suit: 'Diamonds', n: '3'} , { card_suit: 'Diamonds', n: '4'} , { card_suit: 'Diamonds', n: '5'} , { card_suit: 'Diamonds', n: '6'} , { card_suit: 'Diamonds', n: '7'} , { card_suit: 'Diamonds', n: '8'} , { card_suit: 'Diamonds', n: '9'} , { card_suit: 'Diamonds', n: '10'} , { card_suit: 'Diamonds', n: 'J'} , { card_suit: 'Diamonds', n: 'Q'} , { card_suit: 'Diamonds', n: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffle_seed function here. Followed by a call to shuffleDeck with the return value of shuffle_seed as an argument.
  var seed = shuffle_seed();
  shuffleDeck(seed);
}

//write your shuffle_seed function here
function shuffle_seed()
{
  var seed = [];
  for (var i = 0; i < 52; i++)
  {
    seed.push(round(random(10, 73)));
  }
  return seed;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (card_deck[i].marked)
		{
			drawCard(card_deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(card_deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.n == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
