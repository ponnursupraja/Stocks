import {Date } from '../shared/date.model';
import { Subject} from 'rxjs';


export class PriceHistorySerivce{

  private dates : Date[]=[

  ]

  pricesListChanged= new Subject<Date[]>();

  constructor(){

  }

  setDates(response :any){
    this.dates=[];
    let i=0;
    while(i<response.length){
    this.dates.push(response[i]);
    i++;
    }
    console.log(this.dates[0]);
    this.pricesListChanged.next(this.dates.slice());
  }

  getDates(){
    return this.dates.slice();
  }



}
