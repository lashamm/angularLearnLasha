import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { products } from '../models/prodInfo';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-info',
  imports: [RouterModule, CommonModule],
  templateUrl: './products-info.component.html',
  styleUrl: './products-info.component.scss'
})
export class ProductsInfoComponent {

}
