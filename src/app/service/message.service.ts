import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private HttpClient: HttpClient) { }

  public sendEmail(test: string) {
    return this.HttpClient.post('http://localhost:3000/sendmail', { body: test });
  };
}
