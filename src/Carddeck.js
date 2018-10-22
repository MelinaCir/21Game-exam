/**
 * Module for Carddeck.
 *
 * @module src/Carddeck
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

class Deck {
  constructor () {
    this.cardDeck = []

    const suits = ['♣', '♦', '♥', '♠']
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

    for (let suit in suits) {
      for (let value in values) {
        this.cardDeck.push(`${values[value]}${suits[suit]}`)
      }
    }
  }

  shuffle () {
    const deck = this.cardDeck
    let card = deck.length
    let i

    while (card) {
      i = Math.floor(Math.random() * card--);

      [deck[card], deck[i]] = [deck[i], deck[card]]
    }
    return this
  }
}

const deck1 = new Deck()
deck1.shuffle()
console.log(deck1.cardDeck)

module.exports = Deck
