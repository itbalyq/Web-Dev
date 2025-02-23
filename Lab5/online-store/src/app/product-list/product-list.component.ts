import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CategoriesService } from '../categories.service';
import { ProductsContainerComponent } from '../products-container/products-container.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductsContainerComponent],
  template: `<app-products-container [products]="products" />`,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  categoriesService: CategoriesService = inject(CategoriesService);
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryName = params.get('category');
      this.products = this.categoriesService.getProductsByCategory(categoryName ?? '');
    });
  }
}
