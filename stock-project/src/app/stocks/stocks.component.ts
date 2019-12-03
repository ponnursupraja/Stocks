import { Component, OnInit } from '@angular/core';
import { Stock } from './stock.model';
import { StockService } from './stocks.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  selectedStock : Stock;
  constructor(private stockservice: StockService,private dsService : DataStorageService) { }

  ngOnInit() {
    this.dsService.onFetchData();
    this.stockservice.stockSelected.subscribe(
      (stock : Stock) =>{
        this.selectedStock=stock;
      }
    )
  }

}
