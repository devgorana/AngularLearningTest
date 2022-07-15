import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  url="/assets/Data/student.json";
  constructor(private http: HttpClient) { }

  getCardInfo(): any{
    return this.http.get<any[]>(this.url);
  }
}
