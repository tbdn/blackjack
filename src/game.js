const cards = require('./cards');

var init = function () {
    //ToDo - Init function
    this.playDeck = cards.createPlayDeck();
    this.playerCount = 0;
    this.dealerCount = 0;
    this.dealerHand = [''];
    this.playerHand = [''];
};

module.exports.init = init;