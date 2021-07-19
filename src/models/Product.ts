export class Product {
    private _id: string;
    public name : string;
    public categoryId : string;
    public price?: number;
   
    constructor(id:string, name:string, categoryId:string, price?:number | undefined)
    {
        this._id=id;
        this.name=name;
        this.categoryId=categoryId;
        this.price=price;
    }
}
