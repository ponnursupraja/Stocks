import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockDetailComponent } from './stocks/stock-detail/stock-detail.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockItemComponent } from './stocks/stock-list/stock-item/stock-item.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {StockService} from './stocks/stocks.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipe } from './filter.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { SummaryComponent } from './summary/summary.component';
import { DataStorageService } from './shared/data-storage.service';
import { PriceHistorySerivce } from './stocks/price-history.service';
import { SummaryService } from './summary/summary.service';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockDetailComponent,
    StockListComponent,
    StockItemComponent,
    HeaderComponent,
    ShoppingCartComponent,
    PagenotfoundComponent,
    FilterPipe,
    DropdownDirective,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CalendarModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [StockService,ShoppingCartService,DataStorageService,PriceHistorySerivce,SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
