import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from '../../services/bitcoin-data.service'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  btcPrice;

  constructor(private bitcoinDataService: BitcoinDataService) { }

  ngOnInit() {
    this.getDATA();
  }

  getDATA(): void {
    this.bitcoinDataService.btcDATA$
    .subscribe(
      DATA => {
        const tmp = DATA.bpi.USD.rate;
        this.btcPrice = tmp.substring(0, tmp.length - 5);
      },
      error => console.log(error),
    );
  }
}
