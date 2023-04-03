import { Injectable } from '@angular/core';
import  config from '../config';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentstatustableService {
  private apiUrl = config.main.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  rentTableData(dateInit?: Date, dateEnd?: Date){
    const userData = {
      dateinit: dateInit || '2000-01-01',
      dateend: dateEnd || new Date(),
    };
    return this.http.post(`${this.apiUrl}/rents/rentstatus`, userData);
  }


}

