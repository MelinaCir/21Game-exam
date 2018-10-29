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
 * Gives each player a card before starting the first round with the first player.
 *
 * @param {number} amountOfPlayers - The amount of players in the game.
 */
function startGame (amountOfPlayers = 1) {
  this.amountOfPlayers = amountOfPlayers

  let drawPile = new Deck()
  drawPile.createCards()
  drawPile.shuffle()

  let discardPile = new Deck()
  let players = []
  let dealer = new Dealer()

  // Creates players and sets a number for each player of the current game.
  for (let i = 0; i < amountOfPlayers; i++) {
    let player = new Player(i + 1)
    players.push(player)
  }

  // Each player recieves a first card.
  for (let player of players) {
    if (drawPile.deck.length > 1) {
      let card = drawPile.deck.pop()
      player.recieveCard(card)
    } else {
      newDrawPile()
    }
  }

  // Player's turn.
  for (var player of players) {
    while (player.stillPlaying && player.hand.length < 5) {
      if (drawPile.deck.length > 1) {
        player.recieveCard(drawPile.deck.pop())
        let result = player.makeMove(12)
        evaluateMove(result, player)
      } else {
        newDrawPile()
      }
      // Dealer's turn.
      while (dealer.stillPlaying && dealer.hand.length < 5) {
        if (drawPile.deck.length > 1) {
          dealer.recieveCard(drawPile.deck.pop())
          let result = dealer.makeMove(15)
          evaluateMove(result, dealer)

          if (result === 'Satisfied') {
            if (player.totalScore <= dealer.totalScore) {
              console.log(resultOfRound(result, dealer))
              dealer.resetHand()
            } else if (player.totalScore > dealer.totalScore) {
              console.log(resultOfRound(result, player))
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
  * @param {string} result - A string representing the result of the latest move.
  * @param {Object} gamer - The current object playing the game.
  */
  function evaluateMove (result, gamer) {
    if (result === 'Win') {
      console.log(resultOfRound(result, gamer))
      gamer.resetHand()
    } else if (result === 'Lose') {
      console.log(resultOfRound(result, gamer))
      gamer.resetHand()
    } else if (result === 'Satisfied' && gamer instanceof Player) {
      dealer.stillPlaying = true
    }
  }

  /**
   * Creates a new draw pile using the discard pile
   * and the last card from the current draw pile.
   *
   * Also reset the discard pile to an empty object.
   */
  function newDrawPile () {
    let lastCard = drawPile.deck.pop()
    discardPile.deck.push(lastCard)
    discardPile.shuffle()
    drawPile.deck = discardPile.deck
    discardPile = new Deck()
  }

  /**
   * Returns a string representing the results of the finished round.
   * Discards the used cards from both player and dealer.
   *
   * @param {string} result - A string representing the result of the latest move.
   * @param {Object} gamer - The current object playing the game.
   * @returns {string} - A string representing the results of the round.
   */
  function resultOfRound (result, gamer) {
    discardPile.deck = discardPile.deck.concat(player.hand)
    discardPile.deck = discardPile.deck.concat(dealer.hand)

    if (result === 'Lose' && gamer instanceof Dealer) {
      return player.toString() + '\n' +
        dealer.toString() + '\n' + `${player.name} wins!` + '\n'
    } else if (result === 'Lose') {
      return player.toString() + '\n' +
        dealer.toString() + '\n' + 'Dealer wins!' + '\n'
    } else {
      return player.toString() +
      '\n' + dealer.toString() +
      '\n' + `${gamer.name} wins!` + '\n'
    }
  }
}

// Exports
module.exports.startGame = startGame
