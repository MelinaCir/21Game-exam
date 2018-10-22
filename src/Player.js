/**
 * Module for Player
 *
 * @module src/Player
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

/**
 * A player that can recieve cards, count them and choose to take more cards or settle. Should also be able to discard cards.
 */

function Player (hand) {
  this.hand = hand
}

Player.prototype.count = function () {

}

module.exports = Player
