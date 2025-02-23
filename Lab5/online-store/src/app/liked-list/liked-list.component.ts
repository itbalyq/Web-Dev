import { Component, OnInit } from '@angular/core';
import { ProductsContainerComponent } from '../products-container/products-container.component';
import { Product } from '../product';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-liked-list',
  imports: [ProductsContainerComponent],
  template: `<app-products-container [products]="products" />`,
  styleUrl: './liked-list.component.css'
})
export class LikedListComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.products = this.categoriesService.getLikedProducts();
  }
}
