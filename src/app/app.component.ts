import { Component } from '@angular/core';
import {Routes,Router, ActivatedRoute, NavigationStart, NavigationSkipped} from '@angular/router'
import { HomeComponent } from './home/home.component';
import {movieApiService} from './services/movieApi.service'
import { timer } from 'rxjs';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Mania';
  searchBarText:string='';
  public spinkit=Spinkit;
  constructor (private router:Router,private route:ActivatedRoute){
    router.events.subscribe((events:any)=>{
      if(events instanceof NavigationStart){
        this.processSearchBarText(events.url);
      }
    });
  }
  processSearchBarText(url:string){
    switch(url){
      case '/bookmark':{
        this.searchBarText=''; break;
      }
      case '/home':{
        break; this.searchBarText='';
      }
      default:{
        if(url.slice(1,12)=='movieresult'){
          this.searchBarText='';
        }
        else{
          this.route.queryParams.subscribe((data)=>{
            this.searchBarText=data['search']
          })
        }
      }
      break;
    }
  }
  navigate(text:string){    
    text=text.replace(/\s+/g, ' ').trim();
    text=text.replace(/(^\w{1})|(\s+\w{1})/g, (letter:string) => letter.toUpperCase());
    this.router.navigate(["searchlist"],{queryParams:{search:text,page:'1'}});
  }

  
}
