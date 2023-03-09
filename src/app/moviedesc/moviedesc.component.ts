import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { movieApiService } from '../services/movieApi.service'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-moviedesc',
  templateUrl: './moviedesc.component.html',
  styleUrls: ['./moviedesc.component.css']
})
export class MoviedescComponent {
  movieid: string = "";
  apidata: any;
  dataLoaded: boolean = false;
  bookmarkStatus: boolean = false;
  constructor(private route: ActivatedRoute, private dataService: movieApiService, private titleService: Title) {
    this.route.queryParams.subscribe(params => {
      this.dataLoaded = false;
      this.movieid = params['movieid'];
      this.dataService.returnSearchByIndex(this.movieid).subscribe((data: any) => {
        this.apidata = this.dataService.setMovieDetailForClient(data);
        this.titleService.setTitle(this.apidata.title);
        this.bookmarkStatus=this.movieid in localStorage;
        setTimeout(() => {
          this.dataLoaded=true;
        }, 150);
        
      });
    }
    )
  }
  addBookmark() {
    localStorage.setItem(this.movieid, this.movieid);
    this.bookmarkStatus = true;
  }
}

