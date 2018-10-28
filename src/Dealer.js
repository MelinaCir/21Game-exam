/**
 * Module for Dealer.
 *
 * @module src/Dealer
 * @author Melina Cirverius
 * @version 1.0.0
 */

'use strict'

const Player = require('./Player')

/**
 *
 */

function Dealer () {
  Player.call(this)
  this.name = 'Dealer'
  this.stillPlaying = false
}
Dealer.prototype = Object.create(Player.prototype)
Dealer.prototype.constructor = Dealer

Dealer.prototype.toString = function () {
  return `Dealer: ` +
        this.hand.map((card) => `${card.suit}${card.value}`) +
       ` (${this.totalScore})`
}

// resetDealer

module.exports = Dealer
