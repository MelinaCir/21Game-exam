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
  let dealer = new Dealer()

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
      evaluateMove(result, player)

      while (dealer.stillPlaying && dealer.hand.length <= 5) {
        dealer.recieveCard(drawPile.cardDeck.pop())
        let result = dealer.makeMove()
        evaluateMove(result, dealer)

        if (result === 'Satisfied') {
          if (player.totalScore <= dealer.totalScore) {
            console.log('Dealer wins')
            discardPile.push(player.hand)
            discardPile.push(dealer.hand)
            dealer.hand = []
            dealer.totalScore = 0
            dealer.stillPlaying = false
          } else if (player.totalScore > dealer.totalScore) {
            console.log('Dealer loses')
            discardPile.push(player.hand)
            discardPile.push(dealer.hand)
            dealer.hand = []
            dealer.totalScore = 0
            dealer.stillPlaying = false
          }
        }
      }
    }
  }

  function evaluateMove (result, temp) {
    if (result === 'Win') {
      console.log(temp.toString())
      discardPile.push(temp.hand)
      temp.hand = []
      temp.totalScore = 0
      temp.stillPlaying = false
    } else if (result === 'Lose') {
      console.log(temp.toString())
      discardPile.push(temp.hand)
      temp.totalScore = 0
      temp.hand = []
      temp.stillPlaying = false
    } else if (result === 'Satisfied' && temp instanceof Player) {
      dealer.stillPlaying = true
    }
  }
}

module.exports.startGame = startGame
