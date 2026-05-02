import { Component, inject } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-victory-sign',
  imports: [],
  templateUrl: './victory-sign.html',
  styleUrl: './victory-sign.css',
})
export class VictorySign {
  public game = inject(Game);
}
