import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public name: string;
  public price: number;

  constructor(
    public productService: ProductService,
    public routerService: Router,
    public activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(data => {
      const name = data['name'];
      const price = data['price'];
      this.products = this.productService.getAllproducts();
    });
  }

  onSearch() {
    this.routerService.navigate(['/products'], {queryParams: { name: this.name ? this.name : '', price: this.price ? this.price : '' }});
  }
}
