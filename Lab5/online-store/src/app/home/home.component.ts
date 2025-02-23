import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Product } from '../product';
import { ProductsContainerComponent } from '../products-container/products-container.component';

@Component({
  selector: 'app-home',
  imports: [ProductsContainerComponent],
  template: `
    <app-products-container [products]="products" />
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  categoriesService: CategoriesService = inject(CategoriesService);

  constructor() { }

  ngOnInit() {
    this.products = this.categoriesService.getAllProducts();
  }
}

