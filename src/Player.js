/**
 * Module for Player
 *
 * @module src/Player
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

const Deck = require('./Deck')
const DrawPile = require('./DrawPile')
/**
 * A player that can recieve cards, count them and choose to take more cards or settle.
 * Should also be able to discard cards.
 */

function Player () {
  // this.name = name
  this.value = undefined
  this.hand = []
}

Player.prototype.recieveCard = function (card) {
  this.hand.push(card)
  if (!this.hand.isEmpty()) {
    if (card === 'A') {
      if (this.value <= 7) {
        card = 14
      } else {
        card = 1
      }
    }
    if (card === 'J') {
      card = 11
    }
    if (card === 'Q') {
      card = 12
    }
    if (card === 'K') {
      card = 13
    }
  }
  console.log(this.hand)
  // this.hand.push(card)
}
Player.prototype.makeMove = function () {
  this.value = this.hand.reduce()
  while (this.hand.length > 2 > 5) {
    if (this.value === 21) {
      return `${this.name}: ${this.hand} (${value})`
    } else if (value > 21) {
      return `${this.name}: ${this.hand} (${value}) BUSTED!`
    } else if (value >= 16) {
      //  return player.satisfied
    } else {
      Player.recieveCard()
    }
  }

  // Player.prototype.count = function () {
}

module.exports = Player
