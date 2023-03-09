import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {movieApiService} from '../services/movieApi.service'
import { __param } from 'tslib';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent{
  apiData:any;
  searchText:string="";
  currentPageNumber:number =0;
  response:boolean=false;
  pages: any[] =[];
  totalPages: any= 0;
  checkIfResponse:string='empty';
  bookmarkData:any= {};
  constructor (private apiserve:movieApiService, private route: ActivatedRoute,private router:Router){
    this.route.queryParams.subscribe(
      (params:any) => {
      this.checkIfResponse='empty';
      this.searchText=params.search;
      this.currentPageNumber=params.page;
      this.apiserve.returnSearchByText(this.searchText+'&page='+this.currentPageNumber).subscribe((data:any) => {
        this.apiData=this.apiserve.setMoviesForClient(data);
        this.getBookmarksData();
        this.checkLoadingStatus();
        this.getNoPages();
     });    
    });
  }
  getNoPages(){
    let temp= Number(this.apiData.totalResults);
    temp+=9;
    temp=Math.floor(temp/10);
    this.totalPages=temp;
  }
  getBookmarksData(){
    this.apiData.results.forEach((element:any) => {
    let temp=element.imdbId.toString();
      this.bookmarkData[temp]= temp in localStorage;
    });
  }
  checkLoadingStatus(){
    if(this.apiData['response']=='True'){
      setTimeout(() => {
        this.checkIfResponse='yes';
      }, 150);
        
    }
    else{
      this.checkIfResponse='no';
    }
  }
  back(){
    let n= Number(this.currentPageNumber);
    n--;
    this.router.navigate(["searchlist"], { queryParams:{search:this.searchText,page:n}});
  }
  next(){ 
    let n= Number(this.currentPageNumber);
    n++;
    this.router.navigate(["searchlist"], { queryParams:{search:this.searchText,page:n}});

  }
  goToPage(n:any){
    this.router.navigate(["searchlist"], { queryParams:{search:this.searchText,page:n}});
  }
  bookmark(id:any){
    this.bookmarkData[id]=true;
    localStorage.setItem(id,id);
  }
}
  
