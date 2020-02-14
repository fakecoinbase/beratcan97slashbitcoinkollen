import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinDataService {

  public readonly btcDATA$: Observable<any> = this.getBTCData();

  constructor(private http: HttpClient) { }

  getBTCData(): Observable<any> {
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}
