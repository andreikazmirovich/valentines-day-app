import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-scheduler',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule
  ],
  providers: [ provideNativeDateAdapter() ],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent implements OnInit {
  dateSelected = false;
  foodSelected = false;
  dessertSelected = false;
  stepsHeaders = [
    'Коли хочеш провести час разом?',
    'А що поїсти? 😋',
    'А на десертик? 🤤'
  ];
  form = new FormGroup({
    date: new FormControl('')
  });
  food = [
    {
      description: 'Суші',
      imgName: 'sushi.jpg',
      selected: false
    },
    {
      description: 'Піця',
      imgName: 'pizza.jpg',
      selected: false
    },
    {
      description: 'Локшина',
      imgName: 'wok.jpg',
      selected: false
    },
    {
      description: 'Хінкалі / Хачапурі',
      imgName: 'hinkali.jpeg',
      selected: false
    },
    {
      description: 'Бургери / Хот-доги',
      imgName: 'hot-dog.jpeg',
      selected: false
    }
  ];
  desserts = [
    {
      description: 'Кофе з тортиком',
      imgName: 'cake-and-coffee.jpg',
      selected: false
    },
    {
      description: 'Гонконгські вафлі',
      imgName: 'waffels.png',
      selected: false
    }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.form.get('date')?.valueChanges.subscribe(() => this.dateSelected = true);
  }

  isAnyItemSelected(items: any[]): boolean {
    return items.some(f => f.selected);
  }

  next(): void {
    this.dataService.result.date = this.form.get('date')?.value as string;
    this.dataService.result.food = this.food.filter(f => !!f.selected).map(f => f.description);
    this.dataService.result.desserts = this.desserts.filter(d => !!d.selected).map(d => d.description);
    this.dataService.toggleYes();
  }
}
