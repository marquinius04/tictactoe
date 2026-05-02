import { Component, signal, inject } from '@angular/core';
import { Grid } from './grid/grid';
import { VictorySign } from './victory-sign/victory-sign';
import { Game } from './game';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Grid, VictorySign],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public game = inject(Game);
  protected readonly title = signal('tictactoe');
}
