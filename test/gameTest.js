const assert = require('chai').assert;
const expect = require('chai').expect;
const game = require('../src/game');


describe('Game', function () {

    var testgame = null;

    beforeEach(function () {
        testgame = new game.init();
    });

    describe('after initialisation', function () {
        it('should give empty hands to the player', function () {
            expect(testgame.playerCount, 0);
        });

        it('should give empty hands to the dealer', function () {
            expect(testgame.dealerCount, 0);
        });

        it('should generate a complete deck of 52 cards', function () {
            expect(testgame.playDeck.length, 52);
        });

    });
});