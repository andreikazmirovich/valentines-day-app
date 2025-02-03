import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-thank-you',
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent {
  constructor(private dataService: DataService) {}

  next(): void {
    this.dataService.toggleYes();
  }
}
