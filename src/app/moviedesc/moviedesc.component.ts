import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ManiDataService} from '../services/mani-data.service'
@Component({
  selector: 'app-moviedesc',
  templateUrl: './moviedesc.component.html',
  styleUrls: ['./moviedesc.component.css']
})
export class MoviedescComponent {
  movieid:string = "";
  apidata: any;
  constructor (private route: ActivatedRoute, private dataService: ManiDataService){
    this.route.params.subscribe(params => {
      this.movieid = params['movieid'];
      this.apidata=this.dataService.users1(this.movieid);
      this.dataService.users1(this.movieid).subscribe((data:any) => {
        this.apidata=data
        if(this.apidata.Plot=="N/A") this.apidata.Plot="Plot not available";
      
      });
      }
    )
  }
  replaceimagePoster(url:any){
    
    if(url=="N/A") {
      return 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
    }
    else return url;
    
  }
}

