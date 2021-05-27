import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Skills';
  description = 'sonioの主なスキルセット';
  skillList = ['C++', 'Python', 'JavaScript', 'Java', 'HTML', 'CSS/SCSS']

  constructor(private metaService: Meta) {
    this.metaService.updateTag({name: 'description', content: this.description})
   }

  ngOnInit(): void {
  }

}
