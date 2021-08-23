import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { BuyNsellComponent } from './buy-nsell/buy-nsell.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path:'home', component : HomeComponent},
  { path:'account', component : AccountComponent},
  { path:'buyNsell', component : BuyNsellComponent},
  { path:'blog', component : BlogComponent},
  { path:'news', component : NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
