import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', pathMatch: 'full', component: HomeComponent },
    {path: 'essentials/:path/:file', component: PageContentComponent }
];
