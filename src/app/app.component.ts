import { Component } from '@angular/core';
import {Routes,Router, ActivatedRoute, NavigationStart, NavigationSkipped} from '@angular/router'
import { HomeComponent } from './home/home.component';
import {ManiDataService} from './services/mani-data.service'
import { timer } from 'rxjs';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Mania';
  apidata:any;
  searchtxt:any='';
  public spinkit=Spinkit;
  constructor (private router:Router,private route:ActivatedRoute){
    router.events.subscribe((events:any)=>{
      if(events instanceof NavigationStart){
        switch(events.url){
          case '/bookmarks':{this.title='Bookmarks';this.searchtxt=''; break;}
          case '/home':{this.title='Movie Mania'; break; this.searchtxt='';}
          default:{
            if(events.url.slice(1,12)=='movieresult'){
              this.searchtxt='';
            }
            else{
              this.route.queryParams.subscribe((data)=>{
                this.searchtxt=data['search']
              })
            }
          }
          break;
        }
      }

    });
  }

  navigate(text:any){
    text=text.replace(/\s+/g, ' ').trim();
    text=text.replace(/(^\w{1})|(\s+\w{1})/g, (letter:string) => letter.toUpperCase());
    this.router.navigate(["searchlist"],{queryParams:{search:text,page:'1'}});

  }

  
}
