export class Summary{
  public id : string;
  public Username : string;
  public symbol : string;
  public quantity : string;
  public price : string;
  public lastboughtdate : string;
  constructor(id : string,
    username: string,
    symbol:string,
    quantity:string,
    price:string,
    date:string){

    this.id=id;
    this.Username=username;
    this.symbol=symbol;
    this.quantity=quantity;
    this.price=price;
    this.lastboughtdate=date;

  }
}
