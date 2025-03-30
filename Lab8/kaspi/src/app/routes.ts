import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';

const routeConfig: Routes = [
    { 
        path: 'category/:id', 
        component: ProductsComponent 
    }
];

export default routeConfig;
