import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Skills';
  description = 'sonioの主なスキルセット';
  skillList = ['C++', 'Python', 'JavaScript', 'Java', 'HTML', 'CSS/SCSS']

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title + ' | ' + this.titleService.getTitle());
    this.metaService.addTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
