'use strict'

const Deck = require('./Carddeck')
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
    let card = Object.values(drawPile).pop()
    player.receieveCard(card)
  }

  for (let player in players) {
    // försvinner keysen?
    player.receieveCard(Object.values(drawPile).pop())
    // nu sker hela omgången
    // player.makeMove()
  }

  console.log(players.length)
}

module.exports = startGame
