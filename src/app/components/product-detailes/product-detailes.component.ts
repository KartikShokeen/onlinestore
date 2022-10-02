import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent implements OnInit {

  id: number;
  product: Product = new Product();

  constructor(private route: ActivatedRoute,private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.product = new Product();
    this.productService.getProductById(this.id).subscribe( data => {
      this.product = data;
      console.log("hello",this.product);
    });
  }
  addToCart(product:Product){
    this.cartService.addToCart(product);

  }

}
