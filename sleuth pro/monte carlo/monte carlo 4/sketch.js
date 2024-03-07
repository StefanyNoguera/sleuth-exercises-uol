/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 4098078
CaseNum: 802-3-14232074-4098078

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 9 and 54.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cut_location object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deckCut and call it from setup.
- This should search for card matching cut_location inside playingCards.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the playingCards array in the deck_upto_cut array.
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first.
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid.


*/

var playingCards = [ { card_suit: 'Spades', no: 'A'} , { card_suit: 'Spades', no: '2'} , { card_suit: 'Spades', no: '3'} , { card_suit: 'Spades', no: '4'} , { card_suit: 'Spades', no: '5'} , { card_suit: 'Spades', no: '6'} , { card_suit: 'Spades', no: '7'} , { card_suit: 'Spades', no: '8'} , { card_suit: 'Spades', no: '9'} , { card_suit: 'Spades', no: '10'} , { card_suit: 'Spades', no: 'J'} , { card_suit: 'Spades', no: 'Q'} , { card_suit: 'Spades', no: 'K'} , { card_suit: 'Clubs', no: 'A'} , { card_suit: 'Clubs', no: '2'} , { card_suit: 'Clubs', no: '3'} , { card_suit: 'Clubs', no: '4'} , { card_suit: 'Clubs', no: '5'} , { card_suit: 'Clubs', no: '6'} , { card_suit: 'Clubs', no: '7'} , { card_suit: 'Clubs', no: '8'} , { card_suit: 'Clubs', no: '9'} , { card_suit: 'Clubs', no: '10'} , { card_suit: 'Clubs', no: 'J'} , { card_suit: 'Clubs', no: 'Q'} , { card_suit: 'Clubs', no: 'K'} , { card_suit: 'Hearts', no: 'A'} , { card_suit: 'Hearts', no: '2'} , { card_suit: 'Hearts', no: '3'} , { card_suit: 'Hearts', no: '4'} , { card_suit: 'Hearts', no: '5'} , { card_suit: 'Hearts', no: '6'} , { card_suit: 'Hearts', no: '7'} , { card_suit: 'Hearts', no: '8'} , { card_suit: 'Hearts', no: '9'} , { card_suit: 'Hearts', no: '10'} , { card_suit: 'Hearts', no: 'J'} , { card_suit: 'Hearts', no: 'Q'} , { card_suit: 'Hearts', no: 'K'} , { card_suit: 'Diamonds', no: 'A'} , { card_suit: 'Diamonds', no: '2'} , { card_suit: 'Diamonds', no: '3'} , { card_suit: 'Diamonds', no: '4'} , { card_suit: 'Diamonds', no: '5'} , { card_suit: 'Diamonds', no: '6'} , { card_suit: 'Diamonds', no: '7'} , { card_suit: 'Diamonds', no: '8'} , { card_suit: 'Diamonds', no: '9'} , { card_suit: 'Diamonds', no: '10'} , { card_suit: 'Diamonds', no: 'J'} , { card_suit: 'Diamonds', no: 'Q'} , { card_suit: 'Diamonds', no: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_location = { s: 'Diamonds', number: '9'} ;
var deck_upto_cut = [];

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
	//call your deckCut function here
  deckCut();
}

//write your deckCut function here
function deckCut() {
  var deck_upto_cut = [];
  for (var i = 0; i < playingCards.length; i++) {
    if (playingCards[i].card_suit == cut_location.s && playingCards[i].no == cut_location.number) {
      deck_upto_cut.push(playingCards[i]);
      for (var j = i + 1; j < playingCards.length; j++) {
        deck_upto_cut.push(playingCards[j]);
      }
      break;
    }
  }

  // Manual reversal without using the reverse function
  var reversedDeck = [];
  for (var k = deck_upto_cut.length - 1; k >= 0; k--) {
    reversedDeck.push(deck_upto_cut[k]);
  }

  deck_upto_cut = reversedDeck;
}

//write your shuffleSeed() function here.
function shuffleSeed() {
  var seed = [];
  for (var i = 0; i < 52; i++) {
    seed.push(round(random(9, 54)));
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
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
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
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
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
			if (card.no == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
