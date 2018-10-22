/**
 * Module for Card.
 *
 * @module src/Card
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

// const Deck = require('./Carddeck')

class Deck {
  constructor () {
    this.deck = []

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    let array = {
      ace: 1,
      2: 2,
      3: 3
    }
  

    }

    for (let suit in suits) {
      for (let value in values.keys) {
        this.deck.push(`${values[value]} of ${suits[suit]}`)
      }
    }
  }
}

// deck1.deal()
// console.log(deck1.deck)
