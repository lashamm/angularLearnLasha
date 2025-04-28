import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsInfoComponent } from './products-info/products-info.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products:/id', component: ProductsInfoComponent}
];
