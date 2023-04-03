import { Injectable } from '@angular/core';
import  config from '../config';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentstatusService {
  private apiUrl = config.main.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  rentStatus(){
    return this.http.get(`${this.apiUrl}/rents/rentcount`);
  }
}
