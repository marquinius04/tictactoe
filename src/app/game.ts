import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Game {
  board = signal<string[]>(Array(9).fill(''));

  turn = signal<'X' | 'O'>('X');

  winner = signal<string | null>(null);

  constructor() {}

  makeMove(index: number) {
    const currentBoard = this.board();
  
    if(currentBoard[index] !== '' || this.winner()) {
      return
    }

    const newBoard = [...currentBoard];
    newBoard[index] = this.turn();

    this.board.set(newBoard)

    this.checkWinner()

    if (!this.winner()) {
      this.turn.set(this.turn() === 'X' ? 'O' : 'X')
    }
  }

  checkWinner() {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    const currentBoard = this.board();

    for (const [a, b, c] of winningLines) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]
      ) {
        this.winner.set(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes('')) {
      this.winner.set('Empate');
    }
  }

  reset() {
    // Ponemos el tablero a cero
    this.board.set(Array(9).fill(''));
    // Quitamos al ganador
    this.winner.set(null);
    // Empezamos de nuevo con la X
    this.turn.set('X');
  }
}
