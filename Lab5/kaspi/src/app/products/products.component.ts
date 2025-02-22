import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ItemsList } from '../items-list';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item.component';
declare var bootstrap: any;

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, NgFor, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  categoryId!: number;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));
      this.itemsService.getProductsByCategory(this.categoryId).then(products => {
        this.products = products;
      });
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        new bootstrap.Carousel(carousel, { interval: false }); // Отключаем автопрокрутку
      });
    }, 100);
  }
}