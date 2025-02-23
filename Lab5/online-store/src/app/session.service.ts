import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private likedProducts: Set<number> = new Set();
  private removedProducts: Set<number> = new Set();

  constructor() { }

  removeProduct(productId: number) {
    this.removedProducts.add(productId);
  }

  isProductRemoved(productId: number): boolean {
    return this.removedProducts.has(productId);
  }

  likeProduct(productId: number) {
    this.likedProducts.add(productId);
  }
  unlikeProduct(productId: number) {
    this.likedProducts.delete(productId);
  }

  isProductLiked(productId: number): boolean {
    return this.likedProducts.has(productId);
  }
}
