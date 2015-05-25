//card constructor
function Card (numb){
	this.numb = numb;
	//this.suit = suit;
}
//deck constructor with an empty array
function Deck (){
	this.deck = [];
}
//player has a deck of cards
function Player (){
	this.deck = [];
}

//creates a deck of 52 cards
Deck.prototype.init = function(){
	for (var i=1; i <= 13; i++){
		for (var x=0; x < 4; x++){
			aCard = new Card(i);
			this.deck.push(aCard);
		}
	}
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//puts half the cards in each.
Deck.prototype.deal = function(){
	for (i = 0; i < firstDeck.deck.length; i++){
		if (i%2){
		    console.log(firstDeck.deck[i]);
			player1.deck.push(firstDeck.deck[i]);
		} else {
		    console.log("will be p2 : " + firstDeck.deck[i]);
			player2.deck.push(firstDeck.deck[i]);
		}
	}
};



//cretes two players
player1 = new Player();
player2 = new Player();
// inits a the full deck
var firstDeck = new Deck();
firstDeck.init();
//shuffles the deck
shuffle(firstDeck.deck);
console.log(firstDeck.deck);

firstDeck.deal();
console.log("Player 1: ", player1.deck);
console.log("Player 2: ", player2.deck);

