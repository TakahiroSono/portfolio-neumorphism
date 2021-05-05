import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite';
  favoriteList = ['Manga', 'YouTube', 'Amazon \nprime video', 'programming', 'design', 'games'];

  constructor() { }

  ngOnInit(): void {
  }

}
