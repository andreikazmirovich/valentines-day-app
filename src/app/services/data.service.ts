import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sheSaidYesSubject$ = new BehaviorSubject(false);

  constructor() { }

  toggleYes(): void {
    this.sheSaidYesSubject$.next(false);
    setInterval(() => {
      this.sheSaidYesSubject$.next(true);
    }, 100);
  }
}
