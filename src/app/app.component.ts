import { Component } from '@angular/core';
import {Routes,Router} from '@angular/router'
import { HomeComponent } from './home/home.component';
import {ManiDataService} from './services/mani-data.service'
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lightsout';
  apidata:any;
  searchtxt:any='';

  constructor (private router:Router){
  
  }

  navigate(text:any){
 
      this.router.navigate(["searchlist/"+text+'/1']);

  }

  
}
