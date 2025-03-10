import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-products',
  imports: [TruncatePipe],
  template: `
    <form>
      <input type="text" placeholder="Filter rating" #filter />
      <button type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
    <div class="products-container">
      @for (product of products; track product.id) {
        <div class="product-card">
          <img class="product-main-image" [src]="product.images[0]" alt="{{ product.name }}">

          <h2>{{ product.name }}</h2>
          <p>{{ product.description | truncate:90 }}</p>
          <p class="rating">Rating: {{ product.rating }} / 5</p>

          <div class="gallery">
            @for (img of product.images; track img) {
              <img [src]="img" alt="{{ product.name }} image">
            }
          </div>

          <div class="share-buttons">
            <button (click)="shareOnWhatsApp(product)">Share on WhatsApp</button>
            <button (click)="shareOnTelegram(product)">Share on Telegram</button>
          </div>
        </div>
      }
    </div>

  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsService: ProductsService = inject(ProductsService);

  constructor() { 
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  shareOnWhatsApp(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const message = `Check out this product: ${product.name}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`, '_blank');
  }

  filterResults(rating: string) {
    this.products = this.productsService.getFilteredProducts(Number(rating));
  }
}
