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

function startGame (amountOfPlayers = 0) {
  this.amountOfPlayers = amountOfPlayers
  //   this.players = players
  // this._player = new Player () ??
  let drawPile = new Deck()
  drawPile.shuffle()
  drawPile = drawPile.cardDeck

  let counter = 1
  let players = []
  for (let i = 0; i < amountOfPlayers; i++) {
    let player = new Player(i + 1)
    players.push(player)
  }
  console.log(players)
  //   let discardPile = []
  //   var players = []

  //   let player1 = new Player()
  //   let player2 = new Player()
  //   let player3 = new Player()
  //   let player4 = new Player()
  //   player1.recieveCard()

  //   players.push(player1)
  //   players.push(player2)
  //   players.push(player3)
  //   players.push(player4)

  //   console.log(players)

  //   for (let player in players) {
  //     let card = drawPile.pop()
  //     player.recieveCard(card)
  //   }

  //   for (let player in players) {
  //     player.receieveCard(drawPile.pop())
  //     // nu sker hela omgången
  //     player.makeMove()
  //   }
  return players
}

module.exports.startGame = startGame
