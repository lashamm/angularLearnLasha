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
constructor(private router: ActivatedRoute, private api : ApiService){
  this.router.params.subscribe(ramp => {
    console.log(ramp['id']);
    this.productId = ramp['id']

   })

  }
  
productId = 0
productInfo?: productsInfo = new productsInfo
productArr : productsInfo[] = []

ngOnInit(){
  this.api.getProductById(this.productId).subscribe((resp:any) => {
    console.log(resp)
    this.productInfo = resp
  })
}
// ngOnInit(){
//   this.api.getProducts().subscribe((resp: any) => {
//     console.log(resp)
//     this.productArr = resp

//   })
// }

//   getProducts(){
//     this.api.getProducts().subscribe((resp: any) => {
//       console.log(resp)
//       this.productArr = resp

//     })
//   }
}
