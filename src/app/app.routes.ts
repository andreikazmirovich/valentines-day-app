import { Routes } from '@angular/router';
import { WouldYouBeMyValentineComponent } from './components/would-you-be-my-valentine/would-you-be-my-valentine.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { HeartCardComponent } from './components/heart-card/heart-card.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { WantMovieComponent } from './components/want-movie/want-movie.component';
import { ThankYouForBeingMyGirlfriendComponent } from './components/thank-you-for-being-my-girlfriend/thank-you-for-being-my-girlfriend.component';
import { SexComponent } from './components/sex/sex.component';

export const routes: Routes = [
  {
    path: '',
    component: WouldYouBeMyValentineComponent,
    pathMatch: 'full'
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path: 'heart-card',
    component: HeartCardComponent
  },
  {
    path: 'scheduler',
    component: SchedulerComponent
  },
  {
    path: 'movie',
    component: WantMovieComponent
  },
  {
    path: 'sex',
    component: SexComponent
  },
  {
    path: 'thank-you-for-being-my-girlfriend',
    component: ThankYouForBeingMyGirlfriendComponent
  }
];
