import { Component } from '@angular/core';
import { Skill, SkillTab } from '../models/skill.model';
import { skills } from '../data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  tabs: SkillTab[] = skills;
  currentTab: SkillTab = this.tabs[0];

  navTo = (nav: string) => {
    const currentTab = this.tabs.find(tab => tab.nav === nav);
    if (currentTab) {
      this.currentTab = currentTab;
    }
  }

  openLink = (link: string) => {
    window.open(link, '_blank');
  }

}
