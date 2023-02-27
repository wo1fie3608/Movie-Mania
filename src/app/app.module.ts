import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedescComponent } from './moviedesc/moviedesc.component';
import {NgxPaginationModule} from 'ngx-pagination'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchlistComponent,
    MoviedescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
