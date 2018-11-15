import { Product } from './models/product.class';
import { ProductService } from './Services/product.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Routing';

  constructor(
    public routerService: Router
  ) {

  }

  navigate(url: string) {
    this.routerService.navigateByUrl(url);
  }
}
