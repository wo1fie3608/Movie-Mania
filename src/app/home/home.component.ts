import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ManiDataService } from '../services/mani-data.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    let video: any = document.querySelector('video');
    video.defaultPlaybackRate = 10.0;
    video.load()
  }
}
