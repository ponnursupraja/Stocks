import { Stock } from './stock.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Subject } from 'rxjs';

@Injectable()
export class StockService{

  stockSelected = new EventEmitter<Stock>();
  stockListChanged= new Subject<Stock[]>();

private stocks: Stock[] = [
  new Stock('dummy',10.5,150,'DUM')
];

constructor(private scService: ShoppingCartService){

}

setStocks(stocks: any){
  let i=0;
  while(i<108){
  const stock = stocks.stock_data[i];
  const stk = new Stock(stock.name,stock.price,stock.quantity,stock.symbol);

  this.stocks.push(new Stock(stock.name,stock.price,stock.quantity,stock.symbol));
  i++;
}
// console.log(this.stocks);
this.stockListChanged.next(this.stocks.slice());
}


getStocks(){
  return this.stocks.slice();
}

getStock(index : number){
  return this.stocks[index];
}

addStocksBoughtToCart( stock : Stock,amount : number,price : number){
this.scService.addCartItem(stock,amount,price);
// console.log("in stocks service");
// console.log(amount + "" +"price");
}



}
