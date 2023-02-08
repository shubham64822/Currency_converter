import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  getCurrencyData(country1: String) {
    let url = 'https://api.exchangerate.host/latest?base=' + country1;
    return this.http.get(url);
  }
}
