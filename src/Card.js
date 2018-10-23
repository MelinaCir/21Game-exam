/**
 * Module for Card.
 *
 * @module src/Card
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'
/**
 *
 * @constructor
 */

class Card {
  constructor () {
    this.card = []

    let suits = ['♣', '♦', '♥', '♠']
    let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

    for (let suit in suits) {
      suit = suits[suit]
      for (let value in values) {
        value = values[value]
        // let card = new card(suit, value)
        this.card.push(`${value}${suit}`)
      }
    }
  }
}

module.exports = Card
