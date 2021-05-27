import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  title = 'Links';
  description = 'sonioのアカウント一覧';
  linkList = ['Qiita', 'Facebook', 'github']

  constructor(private metaService: Meta) {
    this.metaService.updateTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
