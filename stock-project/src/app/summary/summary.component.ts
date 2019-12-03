import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Summary} from '../summary/summary.model';
import { SummaryService } from './summary.service';
import { Subscription } from 'rxjs';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
list : Summary[];
headElements = ['id', 'first', 'last', 'handle'];

private subscription : Subscription;

  constructor(private dsService : DataStorageService,private summarysertvice: SummaryService) {
    this.list = this.summarysertvice.getSummary();
    this.subscription = this.summarysertvice.summaryListChanged.subscribe(
      (summaryList : Summary[])=>
      {
        this.list = summaryList;
      }

    )
  }

  ngOnInit() {
this.dsService.onSummary();
  }

}

