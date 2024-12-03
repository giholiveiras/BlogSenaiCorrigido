import { Routes } from '@angular/router';
import { FormBlogComponent } from './form-blog/form-blog.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: 'cadastro', component: FormBlogComponent },
  { path: 'home', component: BlogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
