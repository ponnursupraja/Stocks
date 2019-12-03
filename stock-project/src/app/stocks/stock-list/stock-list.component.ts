import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.model';
import {StockService} from '../stocks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})

export class StockListComponent implements OnInit {

stocks : Stock[];
private subscription:Subscription;
filterCompanyName='';
  constructor(private stockservice : StockService) {
    this.stocks = this.stockservice.getStocks();
    this.subscription=this.stockservice.stockListChanged.subscribe(
      (stocksList : Stock[])=>
      {
        this.stocks = stocksList;
      }
    );
  }

  ngOnInit() {

  }

}
