import { Component, OnInit, Input } from '@angular/core';


import { Stock } from '../../stock.model';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
@Input() stock : Stock;
@Input() index: number;



  ngOnInit() {

  }


}
