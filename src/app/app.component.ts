import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Be My Valentine';
  sheSaidYes = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sheSaidYesSubject$.subscribe(sheSaidYes => {
      this.sheSaidYes = sheSaidYes;
    });
  }
}
