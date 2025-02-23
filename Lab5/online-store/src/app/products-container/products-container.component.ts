import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products-container',
  imports: [ProductItemComponent],
  template: `
    @if (filteredProducts.length > 1) {
      <div class="products-container">
        @for (product of filteredProducts; track product.id) {
          <app-product-item 
            [product]="product" 
            (productRemoved)="onProductRemoved($event)" 
          />
        }
      </div>
    } @else {
      <div class="invalid">No products available!</div>
    }

  `,
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent {
  @Input() products: Product[] = [];
  @Output() productRemoved = new EventEmitter<number>();

  filteredProducts: Product[] = [];

  ngOnChanges() {
    this.filteredProducts = [...this.products];
  }

  onProductRemoved(productId: number) {
    this.filteredProducts = this.filteredProducts.filter((product) => product.id !== productId);
    this.productRemoved.emit(productId);
  }
}
