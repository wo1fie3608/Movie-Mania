import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {ManiDataService} from '../services/mani-data.service'
import { __param } from 'tslib';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent{
  // route: any;
  // constructor(private routee:ActivatedRoute){
  //   this.route = routee;
  // }
  // ngOnInit(){
  //   console.log(this.route.snapshot.paramMap.get('searchtext'))
  // }
  // data: any = {};
  apiserve:any;
  router:any;
  apidata:any;
  searchtext:any;
  pagenumber:any;
  response:boolean=false;
  constructor (private apiData:ManiDataService, private route: ActivatedRoute,private rrouter:Router){
 
    this.apiserve=apiData;
    this.router=route;
    this.router.params.subscribe(
      (params:any) => {
      this.searchtext=params.searchtext;
      this.pagenumber=params.pagenumber;
      this.apiserve.users(this.searchtext+'&page='+this.pagenumber).subscribe((data:any) => {
        this.apidata=data;
     });
    
     
    });
    // console.log(this.searchtext)
    // this.searchtext=this.router.snapshot.paramMap.get('searchtext');
    


  }
  checkifresponse(){
    
    try{
      if(this.apidata['Response']=='True'){
        return 'true';
      }
      else{
        return 'false';
      }
    }
    catch(e){
      return 'false'
    }
  }
  replaceimagePoster(url:any){

    if(url=="N/A") {
      return 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
    }
    else return url;
    
  }
  back(){
    let n= Number(this.pagenumber);
    n--;
    this.rrouter.navigate(["../../"+this.searchtext+'/'+n], { relativeTo: this.router });

  
  }
  next(){ 
    let n= Number(this.pagenumber);
    n++;
    this.rrouter.navigate(["../../"+this.searchtext+'/'+n], { relativeTo: this.router });
  }

  }
  
