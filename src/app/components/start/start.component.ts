import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from '../../services/bitcoin-data.service'
import { CurrencyConverterService } from '../../services/currency-converter.service'
import { stringify } from 'querystring';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  btcPrice;
  btcPriceInSek;

  constructor(
    private bitcoinDataService: BitcoinDataService,
    private currencyConverterService: CurrencyConverterService) { }

  ngOnInit() {
    this.getDATA();

    setInterval(() => {
      this.getDATA();
    }, 10000)
  }

  getDATA(): void {
    this.bitcoinDataService.btcDATA$
    .subscribe(
      DATA => {
        const tmp = DATA.bpi.USD.rate;
        this.btcPrice = tmp.substring(0, tmp.length - 5);
        
        this.currencyConverterService.exchangeDATA$
        .subscribe(
          DATA => {
            const tmp = DATA['Realtime Currency Exchange Rate'];
            const USDToSEKExchangeRate = tmp['9. Ask Price'];
            const btcPriceWithoutDot = parseFloat(this.btcPrice.replace(',', ''));
            const USDToSEKExchangeRateWithoutDot = parseFloat(USDToSEKExchangeRate.replace(',', ''));
            const btcPriceInSektmp = btcPriceWithoutDot * USDToSEKExchangeRateWithoutDot;
            this.btcPriceInSek = Math.round(btcPriceInSektmp);
          },
          error => console.log(error),
        );
      },
      error => console.log(error),
    );
    

  }
}
