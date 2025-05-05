import { Component } from '@angular/core';
import { productsInfo } from '../models/prodInfo'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-products',
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  constructor(private api : ApiService){

  }
  
  productArr : productsInfo[] = []

  ngOnInit(){
    this.api.getProducts().subscribe((resp: any) => {
      console.log(resp)
      this.productArr = resp

    })
  }
  
  getProducts(){
    this.api.getProducts().subscribe((resp: any) => {
      console.log(resp)
      this.productArr = resp

    })
  }
}