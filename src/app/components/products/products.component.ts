import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  any_date = new Date(2015,6,6);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    // this.total = this.storeService.getTotal();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    });
  }

}
