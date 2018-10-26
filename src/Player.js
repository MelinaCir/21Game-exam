/**
 * Module for Player
 *
 * @module src/Player
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'

const Deck = require('./Deck')
const DrawPile = require('./DrawPile')
const Card = require('./Card')
/**
 * A player that can recieve cards, count them and choose to take more cards or settle.
 * Should also be able to discard cards.
 */

function Player (nr) {
  this.nr = nr
  this.hand = []
  this.totalScore = 0
}

// Player.prototype.recieveCard = function (card) {
//   this.card = card
//   this.hand.push(card)
// }

// Hur ska jag korrekt skriva ut både kort och värde?
Player.prototype.recieveCard = function (card) {
  this.hand.push(card.value)
  this.countCards(card)
}

Player.prototype.countCards = function (card) {
  if (this.hand.length !== 0) {
    if (card.value === 'A') {
      if (this.totalScore <= 7) {
        this.totalScore = this.totalScore + 14
      } else {
        this.totalScore = this.totalScore + 1
      }
    } else if (card.value === 'J') {
      this.totalScore = this.totalScore + 11
    } else if (card.value === 'Q') {
      this.totalScore = this.totalScore + 12
    } else if (card.value === 'K') {
      this.totalScore = this.totalScore + 13
    } else {
      this.totalScore = this.totalScore + card.value
    }
  }
}
console.log(this.value)

// this.hand.push(card)
// }
Player.prototype.makeMove = function () {
  while (this.hand.length > 2 > 5) {
    if (this.totalScore === 21) {
      return `${this.name}: ${this.hand} (${this.value})`
    } else if (this.value > 21) {
      return `${this.name}: ${this.hand} (${this.value}) BUSTED!`
    } else if (this.value >= 16) {
      //  return player.satisfied
    } else {
      Player.recieveCard()
    }
  }
}

// Player.prototype.win = function () {
//   return `${this.name}: ${this.hand} (${this.value})`
// }

// Player.prototype.count = function () {
// }

module.exports = Player
