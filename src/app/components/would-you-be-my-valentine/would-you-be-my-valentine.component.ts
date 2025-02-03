import { Component, inject, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-would-you-be-my-valentine',
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './would-you-be-my-valentine.component.html',
  styleUrl: './would-you-be-my-valentine.component.scss'
})
export class WouldYouBeMyValentineComponent {
  private snackBar = inject(MatSnackBar);

  constructor(private dataService: DataService) { }

  next(): void {
    this.dataService.toggleYes();
  }

  showSnackbar(): void {
    this.snackBar.open('Мені така відповідь не підходить...');
  }
}
