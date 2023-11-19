import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  constructor() {
    emailjs.init('jKu8cJgGmBzHa-rBK');
  }

  async sendInvitation(data: any): Promise<void> {
    try {
      await emailjs.send('service_yozifrv', 'template_f7hginq', data);
    } catch (e: any) {
      throw new Error('Error sending email: ' + e.message);
    }
  }
}
