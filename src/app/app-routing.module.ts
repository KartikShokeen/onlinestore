import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  { path: "products", component: ProductlistComponent },
  { path: "create-product", component: CreateProductComponent },
  { path: "update-product/:id", component: UpdateProductComponent },
  { path: "product-details/:id", component: ProductDetailesComponent },
  { path: "cart", component: CartComponent },
  {path: "", redirectTo:"/products",pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
