import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { MoviedescComponent } from './moviedesc/moviedesc.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'searchlist/:searchtext/:pagenumber',
    component: SearchlistComponent,
  },
  {
    path: 'searchlist',
    component: HomeComponent,
  },
  {
    path: 'movieresult/:movieid',
    component: MoviedescComponent
  },
  {
    path: 'movieresult',
    component: MoviedescComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
