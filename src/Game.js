/**
 * Module for Game.
 *
 * @module src/Game
 * @author Melina Cirverius
 * @version 1.0.0
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
  var drawPile = new Deck()
  drawPile.shuffle()
  let players = []

  for (let i = 0; i < amountOfPlayers; i++) {
    let player = new Player(i + 1)
    players.push(player)
  }

  for (let player of players) {
    let card = drawPile.cardDeck.pop()
    player.recieveCard(card)
  }
  var stillPlaying = false
  for (let player of players) {
    stillPlaying = true

    while (stillPlaying && player.hand.length <= 5) {
      player.recieveCard(drawPile.cardDeck.pop())

      if (player.totalScore === 21) {
        console.log('Player wins')
        stillPlaying = false
      } else if (player.totalScore > 21) {
        console.log('Player loses')
        stillPlaying = false
      } else if (player.totalScore >= 16) {
      // Dealer plays
        stillPlaying = false
      }
    }
  }

  console.log(players)

  let discardPile = []
}

//   for (let player in players) {
//     player.receieveCard(drawPile.pop())
//     // nu sker hela omgången
//     player.makeMove()
//   }
//   return players
// }

module.exports.startGame = startGame
