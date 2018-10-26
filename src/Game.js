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
const Dealer = require('./Dealer')

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

  var drawPile = new Deck()
  drawPile.shuffle()

  let players = []
  var discardPile = []
  var dealer = new Dealer()

  for (let i = 0; i < amountOfPlayers; i++) {
    let player = new Player(i + 1)
    players.push(player)
  }

  for (let player of players) {
    let card = drawPile.cardDeck.pop()
    player.recieveCard(card)
  }
  for (let player of players) {
    while (player.stillPlaying && player.hand.length <= 5) {
      player.recieveCard(drawPile.cardDeck.pop())
      let result = player.makeMove()
      let dealersTurn = evaluateMove(result, player)

      if (dealersTurn) {
        dealersTurn = false
        dealer.recieveCard(drawPile.card.pop())
        let result = dealer.makeMove()

        if (result === 'Satisfied') {
          if (player.totalScore <= dealer.totalScore) {
            console.log('Dealer wins')
            dealersTurn = false
          } else {
            console.log('Player wins')
            dealersTurn = false
          }
        } else {
          evaluateMove(result, dealer)
          dealersTurn = false
        }
      }
    }
  }
  function evaluateMove (result, temp) {
    if (result === 'Win') {
      console.log(temp.name + ' wins')
      discardPile.push(temp.hand)
      return false
    } else if (result === 'Lose') {
      console.log(temp.name + 'loses')
      discardPile.push(temp.hand)
      return false
    } else if (result === 'Satisfied' && temp.name === 'player') {
      return true
    }

    console.log(players)
    console.log(dealer)
  }
}
// function dealerPlays () {
//   let dealer = new Dealer()
//   dealer
// }

//   for (let player in players) {
//     player.receieveCard(drawPile.pop())
//     // nu sker hela omgången
//     player.makeMove()
//   }
//   return players
// }

module.exports.startGame = startGame
