import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  description = '駆け出しエンジニアsonioの自己紹介ポートフォリオ';

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('sonio\'s Portfolio');
    this.metaService.updateTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
