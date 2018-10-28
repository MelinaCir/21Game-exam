/**
 * Module for Player
 *
 * @module src/Player
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'

/**
 * Creates a Javscript instance that represents a player.
 *
 * @param {number} nr - The player's number.
 * @constructor
 */

function Player (nr) {
  /**
   * The player's name and number written out as a string.
   *
   * @type {string}
   */
  this.name = 'Player ' + nr

  /**
   * The player's hand.
   *
   * @type {Oject}
   */
  this.hand = []

  /**
   * The player's total score of cards in their hand.
   *
   * @type {number}
   */
  this.totalScore = 0

  /**
   * The player's current state.
   *
   * @type {Boolean}
   */
  this.stillPlaying = true
}

/**
 * Recieving a card to place in current object.
 *
 * @param {Object} card - An object representing a card.
 */
Player.prototype.recieveCard = function (card) {
  if (this.hand.length <= 4) {
    this.hand.push(card)
    this.countCards(card)
  }
}

/**
 * Converts an object with a non-numeric value to a numeric value.
 * Adds the value of an object to current object's total score.
 *
 * @param {Object} card - An object representing a card.
 */
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

/**
 * Checks the total score of the current object.
 * Returns a string representing the current objects's state.
 *
 * @param {number} sum - The value deciding when the current object settles.
 * @returns {string} - A string representing the current object's state.
 */
Player.prototype.makeMove = function (sum) {
  if (this.totalScore === 21 || (this.totalScore < 21 && this.hand.length === 5)) {
    this.stillPlaying = false
    return 'Win'
  } else if (this.totalScore > 21) {
    this.stillPlaying = false
    return 'Lose'
  } else if (this.totalScore >= sum) {
    this.stillPlaying = false
    return 'Satisfied'
  }
}

/**
 * Resets the current object to default state.
 */
Player.prototype.resetHand = function () {
  this.hand = []
  this.totalScore = 0
  this.stillPlaying = false
}

/**
 * Returns a string representing the current object.
 *
 * @returns {string} - A string representing the current object.
 */
Player.prototype.toString = function () {
  return `${this.name}: ` +
      this.hand.map((card) => `${card.suit}${card.value}`) +
     ` (${this.totalScore})`
}

// Exports
module.exports = Player
