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

/**
 *
 * @param {number} amountOfPlayers
 */

function startGame (amountOfPlayers = 0) {
  this.amountOfPlayers = amountOfPlayers

  var drawPile = new Deck()
  drawPile.createCards()
  drawPile.shuffle()

  let players = []
  var discardPile = new Deck()
  let dealer = new Dealer()

  for (let i = 0; i < amountOfPlayers; i++) {
    let player = new Player(i + 1)
    players.push(player)
  }

  for (let player of players) {
    if (drawPile.cardDeck.length > 1) {
      let card = drawPile.cardDeck.pop()
      player.recieveCard(card)
    } else {
      newDrawdeck()
    }
  }

  for (var player of players) {
    while (player.stillPlaying && player.hand.length < 5) {
      if (drawPile.cardDeck.length > 1) {
        player.recieveCard(drawPile.cardDeck.pop())
        let result = player.makeMove()
        evaluateMove(result, player)
      } else {
        newDrawdeck()
      }
      while (dealer.stillPlaying && dealer.hand.length < 5) {
        if (drawPile.cardDeck.length > 1) {
          dealer.recieveCard(drawPile.cardDeck.pop())
          let result = dealer.makeMove()
          evaluateMove(result, dealer)

          if (result === 'Satisfied') {
            if (player.totalScore <= dealer.totalScore) {
              console.log(roundResults(result, dealer))
              dealer.resetHand()
            } else if (player.totalScore > dealer.totalScore) {
              console.log(roundResults(result, player))
              dealer.resetHand()
            }
          }
        } else {
          newDrawdeck()
        }
      }
    }
  }
  /**
  *
  * @param {*} result
  * @param {*} temp
  */

  function evaluateMove (result, temp) {
    if (result === 'Win') {
      console.log(roundResults(result, temp))
      temp.resetHand()
    } else if (result === 'Lose') {
      console.log(roundResults(result, temp))
      temp.resetHand()
    } else if (result === 'Satisfied' && temp instanceof Player) {
      dealer.stillPlaying = true
    }
  }

  /**
   *
   */

  function newDrawdeck () {
    let lastCard = drawPile.cardDeck.pop()
    discardPile.cardDeck.push(lastCard)
    discardPile.shuffle()
    drawPile.cardDeck = discardPile.cardDeck
    discardPile = new Deck()
  }

  /**
   *
   * @param {*} result
   * @param {*} temp
   */

  function roundResults (result, temp) {
    discardPile.cardDeck = discardPile.cardDeck.concat(player.hand)
    discardPile.cardDeck = discardPile.cardDeck.concat(dealer.hand)

    if (result === 'Lose' && temp instanceof Dealer) {
      return player.toString() + '\n' +
        dealer.toString() + '\n' + 'Player wins!'
    } else if (result === 'Lose') {
      return player.toString() + '\n' +
        dealer.toString() + '\n' + 'Dealer wins!'
    } else {
      return player.toString() +
      '\n' + dealer.toString() +
      '\n' + `${temp.name} Wins!`
    }
  }
}

module.exports.startGame = startGame
