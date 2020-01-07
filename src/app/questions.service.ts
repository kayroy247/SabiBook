import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  http: any;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'https://questions.aloc.ng/api';
  }

  getQuestion(subject){
      return this.http.get(`${this.baseUrl}/q?subject=${subject}`);

  }
}
