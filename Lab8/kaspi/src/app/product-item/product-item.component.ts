import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  
  get starArray(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  starType(star: number): string {
    const rating = this.product.rating;
    if (star <= rating) {
      return 'full';
    } else if (star - rating < 1 && star - rating > 0) {
      return 'half';
    } else {
      return 'empty';
    }
  }

  constructor(private itemsService: ItemsService) {}

  async likeProduct() {
    this.product.likes++;
    await this.itemsService.updateLikes(this.product.id, this.product.likes);
  }

  async removeProduct() {
    const confirmDelete = confirm(`Are you sure you want to remove ${this.product.name}?`);
    if (confirmDelete) {
      await this.itemsService.deleteProduct(this.product.id);
      alert(`Product ${this.product.name} has been removed.`);
    }
  }
}
