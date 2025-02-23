import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { TruncatePipe } from '../truncate.pipe';
import { SessionService } from '../session.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product-item',
  imports: [TruncatePipe],
  template: `
    <div class="product-card">
      <button (click)="removeProduct()" class="remove-btn">X</button>
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
        <button (click)="shareOnWhatsApp()" class="whatsapp">Share on WhatsApp</button>
        <button (click)="shareOnTelegram()">Share on Telegram</button>
      </div>

      <div class="likes">
        <button (click)="toggleLike()" class="like-btn" [class.liked-like-btn]="isLiked">{{ isLiked ? 'Unlike' : 'Like'}}</button>
        <span [class.liked-span]="isLiked">{{ product.likes }}</span>
      </div>
    </div>
  `,
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() productRemoved = new EventEmitter<number>();

  sessionService: SessionService = inject(SessionService);
  categoriesService: CategoriesService = inject(CategoriesService);

  isLiked = false;

  ngOnInit(): void {
    this.isLiked = this.sessionService.isProductLiked(this.product.id);
  }

  shareOnWhatsApp() {
    const message = `Check out this product: ${this.product.name} - ${this.product.link}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnTelegram() {
    const message = `Check out this product: ${this.product.name}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(message)}`, '_blank');
  }

  toggleLike() {
    if (this.isLiked) {
      this.sessionService.unlikeProduct(this.product.id);
      this.categoriesService.decrementLikes(this.product.id);
    } else {
      this.sessionService.likeProduct(this.product.id);
      this.categoriesService.incrementLikes(this.product.id);
    }
    this.isLiked = !this.isLiked;
  }

  removeProduct() {
    this.sessionService.removeProduct(this.product.id);
    this.productRemoved.emit(this.product.id);
  }
}
