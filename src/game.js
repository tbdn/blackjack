const cards = require('./cards');

var init = function () {
    //ToDo - Init function
    this.playDeck = cards.createPlayDeck();
    this.playerCount = 0;
    this.dealerCount = 0;
    this.dealerHand = [''];
    this.playerHand = [''];
};

var calculateScore = function () {
    // Calculates the scorepoints of the hand
    var score;
    this.playerHand.forEach(function (card){
        if(card.rank === 'Ace') {
            // Aces at the moment only count as 10
            score += 10;
        } else {
            score += card.value;
        }
    });
    this.playerCount = score;
    return score;
};

module.exports.init = init;
module.exports.calculateScoreForTheHand = calculateScore;
