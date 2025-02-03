import { Component, OnInit } from '@angular/core';
import { HeartCardComponent } from '../heart-card/heart-card.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thank-you-for-being-my-girlfriend',
  imports: [
    CommonModule,
    HeartCardComponent
  ],
  templateUrl: './thank-you-for-being-my-girlfriend.component.html',
  styleUrl: './thank-you-for-being-my-girlfriend.component.scss'
})
export class ThankYouForBeingMyGirlfriendComponent implements OnInit {
  isCardFlipped = false;
  showILoveYouMessage = false

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.dataService.result);
  }

  onFlipped(isCardFlipped: boolean): void {
    this.isCardFlipped = isCardFlipped;

    if (!this.showILoveYouMessage) {
      this.showILoveYouMessage = true;
    }
  }
}
