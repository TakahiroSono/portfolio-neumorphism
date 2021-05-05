import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Skills';
  skillList = ['C++', 'Python', 'JavaScript', 'Java', 'HTML', 'CSS/SCSS']

  constructor() { }

  ngOnInit(): void {
  }

}
