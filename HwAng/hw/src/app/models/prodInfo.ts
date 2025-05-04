export class productsInfo{
id!:number;
title?:string;
price?:number;
description?:string;
category?:string;
image?:string;
rating?:rating;
}

class rating{
    rate?:number;
    count?:number;
}