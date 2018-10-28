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
 * Starts a game with the given numbers of players.
 * Gives every player a first card before starting the first round with the first player.
 *
 * @param {number} amountOfPlayers - The amount of players in the game.
 */
function startGame (amountOfPlayers = 1) {
  this.amountOfPlayers = amountOfPlayers

  var drawPile = new Deck()
  drawPile.createCards()
  drawPile.shuffle()

  var discardPile = new Deck()
  let players = []
  let dealer = new Dealer()

  // Sets a number for each player of the current game.
  for (let i = 0; i < amountOfPlayers; i++) {
    let player = new Player(i + 1)
    players.push(player)
  }

  // Each player recieves a first card.
  for (let player of players) {
    if (drawPile.cardDeck.length > 1) {
      let card = drawPile.cardDeck.pop()
      player.recieveCard(card)
    } else {
      newDrawPile()
    }
  }

  // Player's turn.
  for (var player of players) {
    while (player.stillPlaying && player.hand.length < 5) {
      if (drawPile.cardDeck.length > 1) {
        player.recieveCard(drawPile.cardDeck.pop())
        let result = player.makeMove(12)
        evaluateMove(result, player)
      } else {
        newDrawPile()
      }
      // Dealer's turn.
      while (dealer.stillPlaying && dealer.hand.length < 5) {
        if (drawPile.cardDeck.length > 1) {
          dealer.recieveCard(drawPile.cardDeck.pop())
          let result = dealer.makeMove(15)
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
          newDrawPile()
        }
      }
    }
  }

  /**
  * Evalutes the return value after a move.
  * Either ends the round and prints out the result,
  * or give the turn over to the dealer.
  *
  * @param {string} result
  * @param {Object} gamer
  */
  function evaluateMove (result, gamer) {
    if (result === 'Win') {
      console.log(roundResults(result, gamer))
      gamer.resetHand()
    } else if (result === 'Lose') {
      console.log(roundResults(result, gamer))
      gamer.resetHand()
    } else if (result === 'Satisfied' && gamer instanceof Player) {
      dealer.stillPlaying = true
    }
  }

  /**
   * Creates a new draw pile using the last card from the previous draw pile
   * as well as the discard pile.
   * Also reset the discard pile to an empty object.
   */
  function newDrawPile () {
    let lastCard = drawPile.cardDeck.pop()
    discardPile.cardDeck.push(lastCard)
    discardPile.shuffle()
    drawPile.cardDeck = discardPile.cardDeck
    discardPile = new Deck()
  }

  /**
   * Returns a string representing the results of the finished round.
   * Discards the used cards from both player and dealer.
   *
   * @param {string} result
   * @param {Object} gamer
   * @returns {string} - A string representing the results of the round.
   */
  function roundResults (result, gamer) {
    discardPile.cardDeck = discardPile.cardDeck.concat(player.hand)
    discardPile.cardDeck = discardPile.cardDeck.concat(dealer.hand)

    if (result === 'Lose' && gamer instanceof Dealer) {
      return player.toString() + '\n' +
        dealer.toString() + '\n' + 'Player wins!'
    } else if (result === 'Lose') {
      return player.toString() + '\n' +
        dealer.toString() + '\n' + 'Dealer wins!'
    } else {
      return player.toString() +
      '\n' + dealer.toString() +
      '\n' + `${gamer.name} Wins!`
    }
  }
}

// Exports
module.exports.startGame = startGame
