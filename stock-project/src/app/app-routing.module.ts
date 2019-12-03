import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StockDetailComponent } from './stocks/stock-detail/stock-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes : Routes =[
{path:'', redirectTo:'/stocks',pathMatch:'full'},
{ path :'stocks' , component: StocksComponent,children :[
{path:':id',component:StockDetailComponent}
] },
{path : 'cart', component:ShoppingCartComponent},
{path : 'summary', component:SummaryComponent},
{path :'not-found', component:PagenotfoundComponent},
{path : '**' , redirectTo:'/not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]

})

export class AppRoutingModule{

}
