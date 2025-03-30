import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ItemsService } from './items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kaspi';
  categories: { id: number; name: string; image: string }[] = [];

  constructor(private itemsService: ItemsService, private router: Router) {}

  ngOnInit() {
    this.itemsService.getCategories().then(categories => {
      this.categories = categories;
    });
  }

  selectCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId]);
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
