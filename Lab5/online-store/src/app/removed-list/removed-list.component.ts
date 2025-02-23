import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductsContainerComponent } from '../products-container/products-container.component';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-removed-list',
  imports: [ProductsContainerComponent],
  template: `<app-products-container [products]="products" />`,
  styleUrl: './removed-list.component.css'
})
export class RemovedListComponent {
  @Input() products: Product[] = [];

  constructor(private categoriesService: CategoriesService) { }
  
  ngOnInit() {
    this.products = this.categoriesService.getRemovedProducts();
  }
}
