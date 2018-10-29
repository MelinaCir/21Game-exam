/**
 * Module for Deck.
 *
 * @module src/Deck
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'

const Card = require('./Card')

/**
 * Class representing a deck.
 *
 * @class Deck
 */

class Deck {
  /**
   * Creates an instance that represents a deck.
   *
   * @constructor
   */
  constructor () {
    /**
     * The deck holding the cards.
     *
     * @type {array}
     */
    this.deck = []
  }

  /**
   * Creates cards with suits and values.
   *
   */
  createCards () {
    let suits = ['♣', '♦', '♥', '♠']
    let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

    for (let suit in suits) {
      suit = suits[suit]
      for (let value in values) {
        value = values[value]
        let card = new Card(suit, value)
        this.deck.push(card)
      }
    }
  }
  /**
  * Returns an array with a shuffled verson of the current object.
  *
  * @returns {array} - An array with cards in a shuffled order.
  */
  shuffle () {
    let deck = this.deck
    let card = deck.length
    let i
    let temp

    while (card) {
      i = Math.floor(Math.random() * card--)

      temp = deck[card]
      deck[card] = deck[i]
      deck[i] = temp
    }
    return this.deck
  }
}

// Exports
module.exports = Deck
