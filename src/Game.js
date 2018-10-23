/**
 * Module for Game.
 *
 * @module src/Game
 * @author Melina Cirverius
 * @version 1.0
 */

'use strict'

const Deck = require('./Deck')
const Player = require('./Player')

// Start a game
// boolean running = true
// while (running)
//
// { ... running = false}
// Hand out cards to players
// Discard cards
//

function startGame () {
  let drawPile = new Deck()
  drawPile.shuffle()
  drawPile = drawPile.cardDeck

  let discardPile = []
  let players = []

  let player1 = new Player()
  let player2 = new Player()
  let player3 = new Player()
  let player4 = new Player()
  players.push(player1)
  players.push(player2)
  players.push(player3)
  players.push(player4)

  for (let player in players) {
    let card = drawPile.pop()
    player.receieveCard(card)
  }

  for (let player in players) {
    player.receieveCard(drawPile.pop())
    // nu sker hela omgången
    player.makeMove()
  }
}

module.exports = startGame
