import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  send(object: Result): void {
    const templateParams = {
      date: new Date(object.date as string).toLocaleDateString(),
      food: object.food?.length ? object?.food.join(', ') : 'нічого',
      desserts: object.desserts?.length ? object?.desserts.join(', ') : 'нічого',
      movie: object.movie ? 'Так' : 'Ні',
      sex: object.sex ? 'Так' : 'Ні'
    };

    emailjs.send("service_jukkanj","template_9lzfjj7", templateParams, "3GRH_ll9KsLQ7tA1E");
  }
}
