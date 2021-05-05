import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  title = 'Links';
  linkList = ['Qiita', 'Facebook', 'github']

  constructor() { }

  ngOnInit(): void {
  }

}
