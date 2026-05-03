import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Game {
  // Main game state using Angular Signals for reactivity
  board = signal<string[]>(Array(9).fill(''));
  turn = signal<'X' | 'O'>('X');
  winner = signal<string | null>(null);

  constructor() {}

  /**
   * Processes a player's move at a specific index
   * @param index The board position (0-8)
   */
  makeMove(index: number) {
    const currentBoard = this.board();
  
    // Prevent moves on occupied cells or if the game is already over
    if (currentBoard[index] !== '' || this.winner()) {
      return;
    }

    // Update the board state using immutability
    const newBoard = [...currentBoard];
    newBoard[index] = this.turn();
    this.board.set(newBoard);

    // Verify if this move resulted in a win or draw
    this.checkWinner();

    // Toggle turn only if there is no winner yet
    if (!this.winner()) {
      this.turn.set(this.turn() === 'X' ? 'O' : 'X');
    }
  }

  /**
   * Evaluates the board against all possible winning combinations
   */
  checkWinner() {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const currentBoard = this.board();

    for (const [a, b, c] of winningLines) {
      if (
        currentBoard[a] && 
        currentBoard[a] === currentBoard[b] && 
        currentBoard[a] === currentBoard[c]
      ) {
        this.winner.set(currentBoard[a]);
        return;
      }
    }

    // Check for a draw if all cells are filled and no winner was found
    if (!currentBoard.includes('')) {
      this.winner.set('Draw');
    }
  }

  /**
   * Resets the game state to the initial values
   */
  reset() {
    this.board.set(Array(9).fill(''));
    this.winner.set(null);
    this.turn.set('X');
  }
}