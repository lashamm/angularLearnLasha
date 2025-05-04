import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { productsInfo } from '../models/prodInfo';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products-info',
  imports: [RouterModule, CommonModule],
  templateUrl: './products-info.component.html',
  styleUrl: './products-info.component.scss'
})
export class ProductsInfoComponent {
constructor(private api : ApiService, private router: ActivatedRoute){
  this.router.params.subscribe(params => {
    console.log(params['id']);
    this.productInfo = this.productArr.find(product => product.id == params['id']);
  })
  }

productInfo?: productsInfo
productArr : productsInfo[] = []
  




// constructor(private router: ActivatedRoute){
//     this.router.params.subscribe(params => {
//       console.log(params['id']);
//       this.productInfo = this.productArr.find(product => product.id == params['id']);
//     })
//   }



  getProducts(){
    this.api.getProducts().subscribe((resp: any) => {
      console.log(resp)
      this.productArr = resp

    })
  }
}
