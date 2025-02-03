import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-heart-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './heart-card.component.html',
  styleUrl: './heart-card.component.scss'
})
export class HeartCardComponent {
  @Output('onFlipped') onFlippedEvent = new EventEmitter(); 
  cardFlipped = false;

  constructor(private dataService: DataService) {}

  next(): void {
    this.dataService.toggleYes();
  }

  flip(): void {
    this.cardFlipped = !this.cardFlipped;
    this.onFlippedEvent.emit(this.cardFlipped);
  }
}
