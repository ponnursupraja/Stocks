import { Cart } from '../shared/cart.model';
import { Stock } from '../stocks/stock.model';
import { Subject } from 'rxjs';


export class ShoppingCartService {

  cartListChanged= new Subject<Cart[]>();

  private cartList : Cart[]=[
new Cart('abcd',10,125),
new Cart('abcd',20,10)
  ];

  private buyList : Cart[]=[

  ];

getListOfCart(){
  return this.cartList.slice();
}

addCartItem(stock : Stock,amount : number,price : number){
  console.log(status);
  const cartItem = new Cart(stock.name,amount,price);
  this.cartList.push(cartItem);
  this.cartListChanged.next(this.cartList.slice());

}

onEditItem( name : string , amount :number,price : number,index:number ){
  this.cartList[index].name=name;
  this.cartList[index].amount=amount;
  this.cartList[index].price=price;
  this.cartListChanged.next(this.cartList.slice());
}

onDeleteItem(index:number){
this.cartList.splice(index,1);
this.cartListChanged.next(this.cartList.slice());
}


onSelectItem(index : number){
  if(this.cartList[index].selected===undefined )
  {
    this.cartList[index].selected==true;
  }
  else{
    this.cartList[index].selected=!this.cartList[index].selected;
  }
  console.log(this.cartList[index].selected);

}

addBuyItemtoList(){
for(const item of this.cartList){
  if(item.selected==true){
    this.buyList.push(item)
    }
  }
}

getBuyList(){
return this.buyList.slice();

}


}

