/**
 * Module for Player
 *
 * @module src/Player
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

const Deck = require('./Carddeck')
const DrawPile = require('./DrawPile')
/**
 * A player that can recieve cards, count them and choose to take more cards or settle.
 * Should also be able to discard cards.
 */

function Player (name) {
  this.name = name
  this.value = value
  this.hand = []
}
let deck3 = new Deck()
deck3 = deck3.cardDeck
let hand = deck3.pop()

console.log(hand)

let hand2 = deck3.pop()
console.log(hand2)

hand += deck3.pop()
console.log(hand)

function receieveCard(card){
    if (!hand.isEmpty()){
    if (card.isAce){

        }
    }
    hand.push(card)

    value = hand.reduce()
}
function makeMove(){

}

if(this.hand > 21) {
    return 'Player loses!'
}
    else if (this.hand = 21) {
        return 'Player wins!'
    }
    else if (this.hand >= 16)


// Player.prototype.count = function () {

// }

module.exports = Player
