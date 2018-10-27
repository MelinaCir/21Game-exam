/**
 * Module for Player
 *
 * @module src/Player
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'

/**
 * A player that can recieve cards, count them and choose to take more cards or settle.
 * Should also be able to discard cards.
 */

function Player (nr) {
  this.nr = nr
  this.hand = []
  this.totalScore = 0
  this.stillPlaying = true
}

// Hur ska jag korrekt skriva ut både kort och värde?
Player.prototype.recieveCard = function (card) {
  if (this.hand.length < 4) {
    this.hand.push(card)
    this.countCards(card)
  }
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

Player.prototype.makeMove = function () {
  if (this.totalScore === 21 || (this.totalScore < 21 && this.hand.length === 5)) {
    this.stillPlaying = false
    return 'Win'
  } else if (this.totalScore > 21) {
    this.stillPlaying = false
    return 'Lose'
  } else if (this.totalScore >= 16) {
    this.stillPlaying = false
    return 'Satisfied'
  }
}

Player.prototype.toString = function () {
  return `Player#:${this.nr} ${this.hand.forEach(function (card) {
    return card.value
  })} (${this.totalScore})`
}

module.exports = Player
