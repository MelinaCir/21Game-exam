/**
 * Module for Card.
 *
 * @module src/Card
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'

/**
 * Class representing a card.
 *
 * @class Card
 */
class Card {
  /**
   * Creates a Javascript instance that represents a card.
   *
   * @param {string} suit - The suit of the card.
   * @param {string} value - The value of the card.
   * @constructor
   */
  constructor (suit, value) {
    /**
     * The suit of the card.
     *
     * @type {string}
     */
    this.suit = suit

    /**
     * The value of the card.
     *
     * @type {string}
     */
    this.value = value
  }
}

// Exports
module.exports = Card
