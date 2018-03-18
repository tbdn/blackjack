const assert = require('chai').assert;
const expect = require('chai').expect;

const cards = require('../src/cards');

describe('Cards', function () {
    it('Card deck should be an array', function () {
        expect(cards.deck).to.be.an('array');
    });

    it('Card deck should contain 52 cards', function () {
        assert.equal(cards.deck.length, 52);
    });

    it('should create a playabe card deck', function () {
        // ToDo - Write the actual test
        assert.equal(cards.createPlayDeck(), "");
    })
});