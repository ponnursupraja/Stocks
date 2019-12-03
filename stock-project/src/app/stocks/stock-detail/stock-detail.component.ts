import { Component, OnInit , OnDestroy } from '@angular/core';
import { Stock } from '../stock.model';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { StockService } from '../stocks.service';
import {NgForm } from '@angular/forms';
// import { Cart } from '/shared/cart.model;
import {Date } from '../../shared/date.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PriceHistorySerivce } from '../price-history.service';
import { Subscription } from 'rxjs';

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
 prices : Date[];
//  public minDate: Date = new Date ("05/07/2017");
//  public maxDate: Date = new Date ("08/27/2017");
//  public value: Date = new Date ("05/16/2017");
 open = false;

  constructor(private stockservice : StockService,private dsService :DataStorageService,
    private route : ActivatedRoute ,private psHistory : PriceHistorySerivce) {

    }

  ngOnInit() {

    this.route.params.subscribe(
      (params : Params)=>{
        this.id= +params['id'];
        this.stock=this.stockservice.getStock(this.id);
        // console.log("hey");
        console.log(this.stock);
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
    console.log("enters");
    this.price =this.stock.price;
    // const CartItem = new Cart(this.stock.name,this.amount,new Date(),'oneTime',);
    this.stockservice.addStocksBoughtToCart(this.stock,this.amount,this.price);

    console.log(this.stock);
  }

  onBuyStockRecur(){
    this.stockservice.addStocksBoughtToCart(this.stock,this.amount,this.price);
  }

  onCurrentWeek(){
    this.dsService.onClickCurrentWeek(this.stock.symbol);
  }

  onPastWeek(){
    this.dsService.onClickpastWeek(this.stock.symbol);
  }




  display(){
    this. prices=this.psHistory.getDates();
    this.dsubscription=this.psHistory.pricesListChanged.subscribe(
      (values: Date[])=>
      {
        this.prices = values;
      }
    )
    // this.subscription.unsubscribe();
  }

}
