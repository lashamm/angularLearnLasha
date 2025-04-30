export class products{
   id!:number;
   title!:string;
   description!:string;
   category!:string;
   price!:number;
   discountPercentage!:number;
   rating!:number;
   stock!:number;
   tags!: string[];
   brand!:string;
   sku!:string;
   weight!:number;
   dimensions!:dimensions;
   warrantyInformation!:string;
   shippingInformation!:string;
   availabilityStatus!:string;
   reviews!:review[];
   returnPolicy!:string;
   minimumOrderQuantity!: number;
   meta!:meta;
   images!:string[];
   thumbnail!: string;
   total!:number;
   skip!:number;
   limit!:number;
}

class dimensions{
    width!:number;
    height!:number;
    depth!:number;
}

class meta{
    createdAt!:string;
    updatedAt!:string;
    barcode!:string;
    qrCode!:string;
}

class review{
    rating!:number;
    comment!:string;
    date!:string;
    reviewerName!:string;
    reviewerEmail!:string;
}

