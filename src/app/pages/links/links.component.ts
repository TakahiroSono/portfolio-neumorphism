import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  title = 'Links';
  linkList = ['Qiita', 'Facebook', 'github']

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title + ' | ' + this.titleService.getTitle())
   }

  ngOnInit(): void {
  }

}
