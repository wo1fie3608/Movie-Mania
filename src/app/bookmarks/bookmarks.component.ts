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
    this.getids();
    this.getDataForBookmarks();

  }
  getDataForBookmarks() {
    this.databookmark = [];
    for (let item of this.bookmarksids) {
      this.service.users1(item).subscribe((data: any) => {
        if (data.Plot == "N/A") data.Plot = "Plot not available";
        if (data.Poster == 'N/A') data.Poster = 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
        this.databookmark.push(data);
      })
    }
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
