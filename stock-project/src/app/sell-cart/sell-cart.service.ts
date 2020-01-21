import {Cart} from '../shared/cart.model';
import { Subject } from 'rxjs';


export class SellCartService{

  private sellList : Cart[]=[
    new Cart('abcd',10,125),
  ];
  sellListChanged= new Subject<Cart[]>();

  setList(list : Cart[]){
    this.sellList.push(...list);
    this.sellListChanged.next(this.sellList.slice());
  }

  getList(){
    return this.sellList.slice();
  }

}
