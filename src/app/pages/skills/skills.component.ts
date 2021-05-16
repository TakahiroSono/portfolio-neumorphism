import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Skills';
  skillList = ['C++', 'Python', 'JavaScript', 'Java', 'HTML', 'CSS/SCSS']

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title + ' | ' + this.titleService.getTitle())
   }

  ngOnInit(): void {
  }

}
