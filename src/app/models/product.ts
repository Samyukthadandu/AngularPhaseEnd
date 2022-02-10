export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    type:string;
  
    constructor(id=1, name:any, description = '', price = 0,type:any, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
      this.type=type
    }
}
