import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sheSaidYesSubject$ = new BehaviorSubject(false);
  result: Result = {};

  constructor() { }

  toggleYes(): void {
    this.sheSaidYesSubject$.next(false);
    setInterval(() => {
      this.sheSaidYesSubject$.next(true);
    }, 100);
  }
}
