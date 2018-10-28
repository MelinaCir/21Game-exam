/**
 * Module for Deck.
 *
 * @module src/Deck
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'
const Card = require('./Card')

class Deck {
  constructor () {
    this.cardDeck = []
  }

  createCards () {
    let suits = ['♣', '♦', '♥', '♠']
    let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

    for (let suit in suits) {
      suit = suits[suit]
      for (let value in values) {
        value = values[value]
        let card = new Card(suit, value)
        this.cardDeck.push(card)
      }
    }
  }

  shuffle () {
    let deck = this.cardDeck
    let card = deck.length
    let i
    let temp

    while (card) {
      i = Math.floor(Math.random() * card--)

      temp = deck[card]
      deck[card] = deck[i]
      deck[i] = temp
    }
    return this.cardDeck
  }
}

module.exports = Deck
