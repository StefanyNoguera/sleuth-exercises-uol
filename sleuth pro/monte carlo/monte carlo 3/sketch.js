/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 4098078
CaseNum: 802-2-59417147-4098078

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in handToWin from the deck and store it in the hand array.

- Write a function called winning_hand_set and call it from setup.
- The function should take each card in handToWin and seacrh for a match in playing_cards.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function.
- This needs to return an array of 52 random integers between 10 and 83.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playing_cards = [ { type: 'Spades', value: 'A'} , { type: 'Spades', value: '2'} , { type: 'Spades', value: '3'} , { type: 'Spades', value: '4'} , { type: 'Spades', value: '5'} , { type: 'Spades', value: '6'} , { type: 'Spades', value: '7'} , { type: 'Spades', value: '8'} , { type: 'Spades', value: '9'} , { type: 'Spades', value: '10'} , { type: 'Spades', value: 'J'} , { type: 'Spades', value: 'Q'} , { type: 'Spades', value: 'K'} , { type: 'Clubs', value: 'A'} , { type: 'Clubs', value: '2'} , { type: 'Clubs', value: '3'} , { type: 'Clubs', value: '4'} , { type: 'Clubs', value: '5'} , { type: 'Clubs', value: '6'} , { type: 'Clubs', value: '7'} , { type: 'Clubs', value: '8'} , { type: 'Clubs', value: '9'} , { type: 'Clubs', value: '10'} , { type: 'Clubs', value: 'J'} , { type: 'Clubs', value: 'Q'} , { type: 'Clubs', value: 'K'} , { type: 'Hearts', value: 'A'} , { type: 'Hearts', value: '2'} , { type: 'Hearts', value: '3'} , { type: 'Hearts', value: '4'} , { type: 'Hearts', value: '5'} , { type: 'Hearts', value: '6'} , { type: 'Hearts', value: '7'} , { type: 'Hearts', value: '8'} , { type: 'Hearts', value: '9'} , { type: 'Hearts', value: '10'} , { type: 'Hearts', value: 'J'} , { type: 'Hearts', value: 'Q'} , { type: 'Hearts', value: 'K'} , { type: 'Diamonds', value: 'A'} , { type: 'Diamonds', value: '2'} , { type: 'Diamonds', value: '3'} , { type: 'Diamonds', value: '4'} , { type: 'Diamonds', value: '5'} , { type: 'Diamonds', value: '6'} , { type: 'Diamonds', value: '7'} , { type: 'Diamonds', value: '8'} , { type: 'Diamonds', value: '9'} , { type: 'Diamonds', value: '10'} , { type: 'Diamonds', value: 'J'} , { type: 'Diamonds', value: 'Q'} , { type: 'Diamonds', value: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var handToWin = [ { cardSuit: 'Clubs', n: 'J'} , { cardSuit: 'Diamonds', n: 'J'} , { cardSuit: 'Spades', n: 'K'} , { cardSuit: 'Diamonds', n: 'Q'} , { cardSuit: 'Diamonds', n: '10'}  ];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
  shuffleDeck(shuffleSeed());
	//call your winning_hand_set function here
  winning_hand_set();
}

//write your winning_hand_set function here
function winning_hand_set()
{
    for (var i = 0; i < handToWin.length; i++)
    {
        for (var j = 0; j < playing_cards.length; j++)
        {
            if (handToWin[i].cardSuit == playing_cards[j].type && handToWin[i].n == playing_cards[j].value)
            {
                hand.push(playing_cards[j]);
                break;
            }
        }
    }
}
//write your shuffleSeed() function here.
function shuffleSeed()
{
    var seed = [];
    for (var i = 0; i < 52; i++)
    {
        seed.push(round(random(10, 83)));
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
	   for (var j = 0; j < playing_cards.length; j++)
	   {
		  var tempCard = playing_cards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playing_cards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.value == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
