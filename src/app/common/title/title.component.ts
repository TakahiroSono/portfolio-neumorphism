import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title!: String;

  constructor(private titleService: Title) {
   }

  ngOnInit(): void {
    this.titleService.setTitle(this.title + ' | sonio\'s Portfolio');
  }

}
