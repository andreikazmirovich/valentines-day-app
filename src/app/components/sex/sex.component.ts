import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sex',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatRadioModule,
    MatButtonModule
  ],
  templateUrl: './sex.component.html',
  styleUrl: './sex.component.scss'
})
export class SexComponent {
  wantSex: boolean;

  constructor(private dataService: DataService) { }

  next(): void {
    this.dataService.result.sex = this.wantSex;
    this.dataService.toggleYes();
  }
}
