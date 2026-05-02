import { Component, inject } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})

export class Grid {
  public game = inject(Game);
}
