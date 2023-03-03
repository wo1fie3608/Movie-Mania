import { Component } from '@angular/core';
import { ManiDataService } from '../services/mani-data.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent {
  databookmark: any[] = [];
  bookmarksids: string[] = [];
  constructor(private service: ManiDataService, private router: ActivatedRoute) {
    
  }
  ngOnInit(){
    this.getids();
    this.getDataForBookmarks();
  }
  getDataForBookmarks() {
    this.databookmark = [];
    for (let item of this.bookmarksids) {
      this.service.searchByIndex(item).subscribe((data: any) => {
        data=this.service.setMovieDetailForClient(data);
        data=this.handleNA(data);
        this.databookmark.push(data);
      })
    }
  }
  replaceImagePoster(url: any) {
    if (url == "N/A") {
      return 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
    }
    else return url;
  }
  handleNA(data:any){
    if (data.plot == "N/A") data.plot = "Plot not available";
    data.poster=this.replaceImagePoster(data.poster);
    return data;
  }
  getids() {
    this.bookmarksids = [];
    for (let i = 0; i < localStorage.length; i++) {
      let d = localStorage.key(i)?.toString();
      if (d == null) {
        d = "";
      }
      this.bookmarksids.push(d);
    }
  }
  remove(id: string) {
    localStorage.removeItem(id);
    this.getids();
    this.getDataForBookmarks();

  }

}
