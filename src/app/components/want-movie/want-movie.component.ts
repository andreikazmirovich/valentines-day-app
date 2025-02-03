import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-want-movie',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatRadioModule
  ],
  templateUrl: './want-movie.component.html',
  styleUrl: './want-movie.component.scss'
})
export class WantMovieComponent {
  wantMovie: boolean;

  constructor(private dataService: DataService) { }

  next(): void {
    this.dataService.result.movie = this.wantMovie;
  }
}
