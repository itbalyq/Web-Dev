import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private url = 'http://127.0.0.1:8000/api/';

  async getCategories(): Promise<{ id: number; name: string; image: string }[]> {
    const response = await fetch(`${this.url}/categories`);
    return await response.json() ?? [];
  }

  async getProductsByCategory(categoryId: number): Promise<any[]> {
    const response = await fetch(`${this.url}/products?categoryId=${categoryId}`);
    return await response.json() ?? [];
  }

  async updateLikes(productId: number, likes: number): Promise<void> {
    await fetch(`${this.url}/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes })
    });
  }

  async deleteProduct(productId: number): Promise<void> {
    await fetch(`${this.url}/products/${productId}`, {
      method: 'DELETE'
    });
  }

  async updateRating(productId: number, rating: number): Promise<void> {
    await fetch(`${this.url}/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rating })
    });
  }
}
