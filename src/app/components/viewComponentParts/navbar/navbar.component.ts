import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from '../../../services/bitcoin-data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  btcPrice = 'loading...';

  constructor(private bitcoinDataService: BitcoinDataService) { }

  ngOnInit() {
    this.bitcoinDataService.btcDATA$
    .subscribe(
      DATA => {
        this.btcPrice = DATA.bpi.USD.rate,
        console.log(this.btcPrice)
      },
      error => console.log(error),
    );
  }
}
