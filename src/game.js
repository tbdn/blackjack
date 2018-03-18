const cards = require('./cards');

var Game = function () {
    var playDeck;
    var playerCount;
    var dealerCount;
    var dealerHand;
    var playerHand;
};

Game.prototype.init = function () {
    //ToDo - Init function
    this.playDeck = cards.createPlayDeck();
    this.playerCount = 0;
    this.dealerCount = 0;
    this.dealerHand = [];
    this.playerHand = [];
};

Game.prototype.calculateScore = function () {
// Calculates the scorepoints of the hand
    var self = this;
    var score;
    self.playerHand.forEach(function (card) {
        if (card.rank === 'Ace') {
            // Aces at the moment only count as 10
            score += 10;
        } else {
            score += card.value;
        }
    });
    self.playerCount = score;
    return score;
};

Game.prototype.dealACardToThePlayer = function (num) {
    var self = this;

    // number of cards to deal
    if (num === undefined) {
        num = 1;
    } else {
        // At the moment num could only be 1
        num = 1;
    }


    if (self.playDeck === undefined || self.playDeck.length < num) {
        throw new Error("Noth enough cards to deal");
    }

    if (num === 1) {
        /*
        var newCard = self.playDeck.shift();
        this.playerCount += newCard.value;
         */
        this.playerCount += 1;
        //return self.playDeck.shift();
        return num;
    }
};

module.exports = Game;

/*
module.exports = {
    init: init,
    calculateScoreForTheHand: calculateScore,
    dealACardToThePlayer: dealACardToThePlayer
};
*/
