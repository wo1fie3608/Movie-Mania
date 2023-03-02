import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ManiDataService } from '../services/mani-data.service'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-moviedesc',
  templateUrl: './moviedesc.component.html',
  styleUrls: ['./moviedesc.component.css']
})
export class MoviedescComponent {
  movieid: string = "";
  apidata: any;
  dataloaded: string = 'no';
  constructor(private route: ActivatedRoute, private dataService: ManiDataService, private titleService: Title) {
    this.route.queryParams.subscribe(params => {
      this.dataloaded = 'no';
      this.movieid = params['movieid'];
      this.apidata = this.dataService.users1(this.movieid);
      this.dataService.users1(this.movieid).subscribe((data: any) => {
        this.dataloaded = 'yes';
        this.apidata = data
        if (this.apidata.Plot == "N/A") this.apidata.Plot = "Plot not available";
        this.titleService.setTitle(this.apidata.Title);
      });
    }
    )
  }
  replaceimagePoster(url: any) {
    if (url == "N/A") {
      return 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
    }
    else return url;
  }
  bookmark() {
    localStorage.setItem(this.movieid, this.movieid);
  }
}

