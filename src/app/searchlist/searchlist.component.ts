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
  apidata:any;
  searchtext:any;
  pagenumber:number =0;
  response:boolean=false;
  pages: any[] =[];
  nopages: number= 0;
  dataloaded: boolean= false;
  checkifresponse:string='empty';
  constructor (private apiserve:ManiDataService, private route: ActivatedRoute,private router:Router){
    this.route.queryParams.subscribe(
      (params:any) => {
      this.checkifresponse='empty';
      this.searchtext=params.search;
      this.pagenumber=params.page;
      this.apiserve.searchByText(this.searchtext+'&page='+this.pagenumber).subscribe((data:any) => {
        this.apidata=this.apiserve.setMoviesForClient(data);
        let temp= Number(data.totalResults);
        temp+=9;
        temp=Math.floor(temp/10);
        this.nopages=temp;
        if(this.apidata['response']=='True'){
            this.checkifresponse='yes';
        }
        else{
          this.checkifresponse='no';
        }
     });    
    });
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
    this.router.navigate(["searchlist"], { queryParams:{search:this.searchtext,page:n}});
  }
  next(){ 
    let n= Number(this.pagenumber);
    n++;
    this.router.navigate(["searchlist"], { queryParams:{search:this.searchtext,page:n}});

  }
  nextValid(n:any){
    if((n)*10<=this.apidata.totalResults){
      return 'true';
    }
    return 'false';
  }
  goToPage(n:any){
    this.router.navigate(["searchlist"], { queryParams:{search:this.searchtext,page:n}});
  }
}
  
