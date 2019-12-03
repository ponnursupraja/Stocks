import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Cart } from '../shared/cart.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

 cartList : Cart[];
 private subscription:Subscription;

  constructor(private scService: ShoppingCartService,private dsService : DataStorageService) { }

  ngOnInit() {
    this.cartList=this.scService.getListOfCart();
    this.subscription=this.scService.cartListChanged.subscribe(
      (cartList : Cart[])=>
      {
        this.cartList = cartList;
      }
    );
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
  }
  }

  onDelete(index:number){
    this.scService.onDeleteItem(index);
  }


  onSelect(index : number){
    this.scService.onSelectItem(index);
    console.log(index);
  }

  onSave(name: HTMLInputElement,amount:HTMLInputElement ,price:HTMLInputElement,index:number){
    this.scService.onEditItem(name.textContent,+amount.textContent,+price.textContent,index);
    console.log(name.textContent,amount.textContent,price.textContent,index);
  }

  onBuy(){
this.scService.addBuyItemtoList();
this.dsService.BuyProcess();
  }


}
