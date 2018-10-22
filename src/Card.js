/**
 * Module for Card.
 *
 * @module src/Card
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

// const Deck = require('./Carddeck')

// var deck2 = new Deck()
// deck2 = deck2.cardDeck

// function shuffle (deck2) {
//   let card = deck2.lenght
//   let i
//   let x

//   while (card) {
//     i = Math.floor(Math.random() * card--)

//     x = deck2[card]
//     deck2[card] = deck2[i]
//     deck2[i] = x
//   }
// }

// console.log(deck2.shuffle())

class Deck {
  constructor () {
    this.deck = []

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`)
      }
    }
  }

  shuffle () {
    const deck = this.deck
    let m = deck.length
    let i

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]]
    }

    return this
  }

  // deal () {
  //   return this.deck.pop()
  // }
}

const deck1 = new Deck()
deck1.shuffle()
console.log(deck1.deck)
// deck1.deal()
// console.log(deck1.deck)
