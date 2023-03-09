import { Component } from '@angular/core';
import { movieApiService } from '../services/movieApi.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent {
  bookmarksData: any[] = [];
  bookmarksIdList: string[] = [];
  constructor(private service: movieApiService, private router: ActivatedRoute) { }
  ngOnInit(){
    this.getIds();
    this.getDataForBookmarks();
  }
  getDataForBookmarks() {
    this.bookmarksData = [];
    for (let item of this.bookmarksIdList) {
      this.service.returnSearchByIndex(item).subscribe((data: any) => {
        data=this.service.setMovieDetailForClient(data);
        this.bookmarksData.push(data);
      })
    }
  }
  getIds() {
    this.bookmarksIdList = [];
    for (let i = 0; i < localStorage.length; i++) {
      let d = localStorage.key(i)?.toString();
      if (d == null) {
        d = "";
      }
      this.bookmarksIdList.push(d);
    }
  }
  removeBookmark(id: string) {
    localStorage.removeItem(id);
    this.getIds();
    this.getDataForBookmarks();
  }
}
