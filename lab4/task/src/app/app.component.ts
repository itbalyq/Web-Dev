import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
    <app-products></app-products>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaspi Products';
}
