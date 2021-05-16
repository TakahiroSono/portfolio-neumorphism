import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite';
  favoriteList = ['Manga', 'YouTube', 'Amazon \nprime video', 'programming', 'design', 'games'];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title + ' | ' + this.titleService.getTitle());
   }

  ngOnInit(): void {
  }

}
