import { Summary } from './summary.model';
import { Subject } from 'rxjs';

export class SummaryService{

  private summaryList : Summary[]=[
    new Summary('1','giving','abcdef','DRK','12.38','12-20-1994'),
    new Summary('1','giving','Zbcdef','KDRK','30.38','15-20-2009'),
  ];

  summaryListChanged= new Subject<Summary[]>();

  setSummarylist(list : any){
    let i=0;
    while(i<list.length){
      this.summaryList.push(list[i]);
      i++;
      }
      console.log(list);
      this.summaryListChanged.next(this.summaryList.slice());
  }

  getSummary(){
    return this.summaryList.slice();
  }

}
