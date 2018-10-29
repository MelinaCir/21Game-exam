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
 * Creates a Javscript instance that represents a dealer.
 *
 * @constructor
 */
function Dealer () {
  Player.call(this)
  /**
   * The dealer's name.
   *
   * @type {string}
   */
  this.name = 'Dealer'

  /**
   * The dealer's current state.
   *
   * @type {Boolean}
   */
  this.stillPlaying = false
}

Dealer.prototype = Object.create(Player.prototype)
Dealer.prototype.constructor = Dealer

// Exports
module.exports = Dealer
