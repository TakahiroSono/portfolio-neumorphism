import { Component, OnInit, Output } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite';
  description = 'sonioの趣味や好きなもの一覧';
  favoriteList = ['Manga', 'YouTube', 'Amazon \nprime video', 'programming', 'design', 'games'];

  constructor(private metaService: Meta) {
    this.metaService.updateTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
