/**
 * Module for DrawPile.
 *
 * @module src/DrawPile
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

const Deck = require('./Carddeck')
/**
 *
 */

let drawPile = new Deck()
drawPile = drawPile.cardDeck

console.log(drawPile)
let hand = drawPile.pop()
hand += drawPile.pop()
console.log(drawPile)
console.log(hand)
