import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProductList().subscribe(
      data => {this.products = data
      });

  }
  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }
  productDetails(id: number){
    this.router.navigate(['product-details', id]);
  }

}
