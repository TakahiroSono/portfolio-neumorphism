import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite';
  description = 'sonioの趣味や好きなもの一覧';
  favoriteList = ['Manga', 'YouTube', 'Amazon \nprime video', 'programming', 'design', 'games'];

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title + ' | ' + this.titleService.getTitle());
    this.metaService.addTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
