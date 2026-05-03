import { Component, inject } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.html',
  styleUrls: ['./grid.css']
})
export class Grid {
  // Dependency injection for the shared game logic
  public game = inject(Game);
}