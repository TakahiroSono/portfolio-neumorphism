import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  title = 'Links';
  description = 'sonioのアカウント一覧';
  linkList = ['Qiita', 'Facebook', 'github']

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title + ' | ' + this.titleService.getTitle());
    this.metaService.addTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
