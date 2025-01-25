import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-would-you-be-my-valentine',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './would-you-be-my-valentine.component.html',
  styleUrl: './would-you-be-my-valentine.component.scss'
})
export class WouldYouBeMyValentineComponent {
  constructor(private dataService: DataService) { }

  onYesClick(): void {
    this.dataService.toggleYes();
  }
}
