import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { MoviedescComponent } from './moviedesc/moviedesc.component';
import { Page404Component } from './page404/page404.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
const routes: Routes = [
  {
    path: 'bookmark',
    component: BookmarksComponent,
    title: 'Bookmarks'

   },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Movie Mania'
  },
  {
    path: '',
    component: HomeComponent,
  },
  
  {
    path: 'searchlist',
    component: SearchlistComponent,
    title: 'Results'
  },
  {
    path: 'movieresult',
    component: MoviedescComponent
  
  },
  { path: '**', pathMatch: 'full', component: Page404Component, title: '404' }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
