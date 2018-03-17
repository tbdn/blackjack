const assert = require('chai').assert;
const expect = require('chai').expect;
const game = require('../src/game').init;


describe('Game', function () {

    var testgame = null;

    beforeEach(function () {
        testgame = new game;
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

        it('should be an score of zero after calculating it', function () {
            expect(testgame.calculateScoreForTheHand, 0)
        });
    });

    describe('if a new card was requested', function () {
        it('should deal a new card to the player', function () {
            var playerHandLengthBefore = testgame.playerHand.length;
            //FIXME is not a function problem - module.exports error
            testgame.dealACardToThePlayer();
            expect(testgame.playerHand.length, playerHandLengthBefore+1);
        });

        it('should calculate the new score for the hand automaticly and correct', function () {
            //FIXME is not a function problem - module.exports error
            testgame.dealACardToThePlayer();
            expect(testgame.calculateScoreForTheHand, 1);
        });

        it('should only deal one new card', function () {
            //FIXME is not a function problem - module.exports error
            expect(testgame.dealACardToThePlayer(5), 1)
        });
    })
});