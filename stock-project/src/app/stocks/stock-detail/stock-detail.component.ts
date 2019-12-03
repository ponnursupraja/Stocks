import { Component, OnInit , OnDestroy } from '@angular/core';
import { Stock } from '../stock.model';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { StockService } from '../stocks.service';
import {NgForm } from '@angular/forms';
// import { Cart } from '/shared/cart.model;
import {DateModel } from '../../shared/date.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PriceHistorySerivce } from '../price-history.service';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit{
 stock: Stock;
 id : number ;
 amount :number;
 price : number;
 public dsubscription:Subscription;
 prices : DateModel[];
 public minDate: Date = new Date ("05/07/2009");
 public maxDate: Date = new Date ("08/27/2020");
 public value: Date = new Date ();

 open = false;

  constructor(private stockservice : StockService,private dsService :DataStorageService,
    private route : ActivatedRoute ,private psHistory : PriceHistorySerivce) {

    }

  ngOnInit() {

    this.route.params.subscribe(
      (params : Params)=>{
        this.id= +params['id'];
        this.stock=this.stockservice.getStock(this.id);
      }
    )

  }

  change(){
    this.open = !this.open;
  }


  onSubmit(form : NgForm){
    this.amount=form.value.amount;
  }

  onBuyStockOneTime(){
    this.price =this.stock.price;
    // const CartItem = new Cart(this.stock.name,this.amount,new Date(),'oneTime',);
    this.stockservice.addStocksBoughtToCart(this.stock,this.amount,this.price);
  }

  onBuyStockRecur(){
    interval(1000 * 60).subscribe(x => {
      this.onBuyStockOneTime();
    });
  }

  onCurrentDay(){
    this.dsService.onClickCurrentDay(this.stock.symbol);
  }

  onCurrentWeek(){
    this.dsService.onClickCurrentWeek(this.stock.symbol);
  }

  onPastWeek(){
    this.dsService.onClickpastWeek(this.stock.symbol);
  }

  MonthTodate(){
this.dsService.OnclickMonthTodate(this.value);
  }

  YearTodate(){
this.dsService.OnClickYearTodate(this.value);
  }

  onPast5years(){
this.dsService.onClickPast5years(this.value);
  }


  onValueChange(args: any):void {
    /*Displays selected date in the label*/
    this.value =  new Date(args.value.toLocaleDateString());
}


  display(){
    this. prices=this.psHistory.getDates();
    this.dsubscription=this.psHistory.pricesListChanged.subscribe(
      (values: DateModel[])=>
      {
        this.prices = values;
      }
    )
    // this.subscription.unsubscribe();
  }





}
