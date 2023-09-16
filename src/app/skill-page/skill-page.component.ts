import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.scss']
})
export class SkillPageComponent {

  @Input()
  skills: any = [];

  @Input()
  header: string = '';

  @Input()
  content: string = '';

}
