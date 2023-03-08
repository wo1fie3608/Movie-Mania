import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedescComponent } from './moviedesc/moviedesc.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Page404Component } from './page404/page404.component'
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MoviesloaderComponent } from './moviesloader/moviesloader.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchlistComponent,
    MoviedescComponent,
    Page404Component,
    BookmarksComponent,
    PaginationComponent,
    MoviesloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    NgxPaginationModule,
   NgHttpLoaderModule.forRoot(),
   NgxSkeletonLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
