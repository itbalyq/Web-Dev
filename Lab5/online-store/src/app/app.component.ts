import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <header>
      <h1>{{ title }}</h1>
      <nav class="categories">
        <ul>
          <li>
            <a [routerLink]="'/'">All</a>
          </li>
          @for (categoryName of categoryNames; track $index) {
            <li> 
              <a [routerLink]="'/categories/' + categoryName.toLowerCase()">{{ categoryName }}</a>
            </li>
          }
        </ul>
        <ul>
          <li>
            <a [routerLink]="'/liked-products'"><i class="fa-solid fa-heart"></i></a>
          </li>
          <li>
            <a [routerLink]="'/removed-products'"><i class="fa-solid fa-trash"></i></a>
          </li>
        </ul>
      </nav>
    </header>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kaspi Products';
  categoriesService: CategoriesService = inject(CategoriesService);
  categoryNames: string[] = [];

  constructor() { }

  ngOnInit() {
    this.categoryNames = this.categoriesService.getCategoryNames();
  }
}
