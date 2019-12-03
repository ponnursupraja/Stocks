import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Stock } from '../stocks/stock.model';
import { StockService } from '../stocks/stocks.service';
import {Date} from './date.model';
import { PriceHistorySerivce } from '../stocks/price-history.service';
import { ShoppingCartService}  from '../shopping-cart/shopping-cart.service';
import { SummaryService } from '../summary/summary.service';
import { Summary } from '../summary/summary.model';

@Injectable()
export class DataStorageService{


  constructor(private http: HttpClient,private stockservice : StockService,private phService : PriceHistorySerivce,
    private scService : ShoppingCartService,private summaryservice : SummaryService){
  }

  onFetchData(){
    this.http.get<Stock[]>('http://ec2-18-222-112-169.us-east-2.compute.amazonaws.com/allStocks')
    .subscribe(stocks =>
      {
        this.stockservice.setStocks(stocks);
      })
  }


  onClickCurrentDay(symbol:string){
    this.http.get<Date[]>('http://ec2-18-222-112-169.us-east-2.compute.amazonaws.com/companyStockHistory/currentWeek/symbol',{
      params : new HttpParams().set('symbol',symbol)
    })
    .subscribe(response =>
      {
        this.phService.setDates(response);
      }
      )
  }

  onClickCurrentWeek(symbol:string){
    console.log(symbol);
    this.http.get<Date[]>('http://ec2-18-222-112-169.us-east-2.compute.amazonaws.com/companyStockHistory/currentWeek/symbol',{
      params : new HttpParams().set('symbol',symbol)
    })
    .subscribe(response =>
      {
        this.phService.setDates(response);
      }
      )
  }


  onClickpastWeek(symbol : string){

    this.http.get<Date[]>('http://ec2-18-222-112-169.us-east-2.compute.amazonaws.com/companyStockHistory/currentWeek/symbol',{
      params : new HttpParams().set('symbol',symbol)
    })
    .subscribe(response =>
      {
        this.phService.setDates(response);
      }
      )

  }


  OnclickMonthTodate(){

  }


  OnClickYearTodate(){

  }


  onClickPast5years(){

  }


  BuyProcess(){
    const list = this.scService.getBuyList();

    this.http.post('http://ec2-18-222-112-169.us-east-2.compute.amazonaws.com:8080/buyStock/thanksgiving',list).subscribe(response =>
      {
        console.log(response);
      }
    );

  }

  onSummary(){
    this.http.get<Summary[]>('http://ec2-18-222-112-169.us-east-2.compute.amazonaws.com:8080/findUserTransaction/thanksgiving').subscribe(summaryl =>
      {
        this.summaryservice.setSummarylist(summaryl);
      });
  }







}
