import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { LikedListComponent } from "./liked-list/liked-list.component";
import { RemovedListComponent } from "./removed-list/removed-list.component";


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'categories/:category',
        component: ProductListComponent,
        title: 'Products by category',
    },    
    {
        path: 'liked-products',
        component: LikedListComponent,
        title: 'Liked products',
    },
    {
        path: 'removed-products',
        component: RemovedListComponent,
        title: 'Removed products',
    },
];

export default routeConfig;