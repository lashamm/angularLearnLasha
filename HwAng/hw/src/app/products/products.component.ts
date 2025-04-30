import { Component } from '@angular/core';
import { products } from '../models/prodInfo'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // public productData: products[] =  
  
}
