window.onload = function(){

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
		for (i = 0; i < this.deck.length; i++){
			if (i%2){
			    console.log(this.deck[i]);
				player.deck.push(this.deck[i]);
			} else {
			    console.log("will be p2 : " + this.deck[i]);
				computer.deck.push(this.deck[i]);
			}
		}
	};

	//Game constructor
	function Game(){
		this.winner;
		this.loser;
	}
	//cretes two players
	Game.prototype.init = function(){
		player = new Player();
		computer = new Player();
		// inits a the full deck
		var firstDeck = new Deck();
		firstDeck.init();
		//shuffles the deck
		shuffle(firstDeck.deck);
		console.log(firstDeck.deck);

		firstDeck.deal();
		console.log("Player 1: ", player.deck);
		console.log("Player 2: ", computer.deck);
	}

	$("#newGame").click(function(){
		game = new Game();
		game.init();
	});

	$("#flip").click(function(){
		$("#playerCard").html(player.deck[player.deck.length-1].numb);
		$("#computerCard").html(computer.deck[computer.deck.length-1].numb);
	});
	$("#take").click(function(){
		game.compare();
		$("#playerCard").html(" ");
		$("#computerCard").html(" ");

	})


		Game.prototype.compare = function(){
		//if the player wins...
			var playerCard = player.deck[player.deck.length-1];
			var computerCard = computer.deck[computer.deck.length-1];
			console.log("Player Card: " + playerCard.numb);
			console.log("Computer Card: " + computerCard.numb);
		if(playerCard.numb > computerCard.numb){
			//put the card at the end of the player deck
			player.deck.unshift(computerCard);
			//and take it out of the computer deck.
			temp = player.deck.pop();
			player.deck.unshift(temp);
			computer.deck.pop();
		} else if (playerCard.numb < computerCard.numb){
			computer.deck.unshift(playerCard);
			temp = computer.deck.pop();
			computer.deck.unshift(temp);
			player.deck.pop();
		} else {
			console.log("bunch of stuff");
		}
	}



} //end onload