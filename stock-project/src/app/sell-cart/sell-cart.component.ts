import { Component, OnInit } from '@angular/core';
import {Cart } from '../shared/cart.model';
import { SellCartService } from './sell-cart.service';
@Component({
  selector: 'app-sell-cart',
  templateUrl: './sell-cart.component.html',
  styleUrls: ['./sell-cart.component.css']
})
export class SellCartComponent implements OnInit {
sellList : Cart[];
  constructor(private sellcartService : SellCartService) { }

  ngOnInit() {
    this.sellList = this.sellcartService.getList();

  }

}
