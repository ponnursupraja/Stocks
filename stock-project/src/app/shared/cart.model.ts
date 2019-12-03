export class Cart {

  // public id: number;
  public name:string;
  public amount : number;
  public price : number;
  public selected : boolean=false;

  constructor(
    name:string,
    amount : number,
    price : number

    ){

    // this.id=id;
    this.name=name;
    this.amount=amount;
    this.price=price;
    // this.selected=selected;
  }
}
