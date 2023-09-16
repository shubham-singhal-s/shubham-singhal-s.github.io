import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.scss']
})
export class SkillButtonComponent {

  @Input() name: string = '';
  @Input() link: string = '';

  goToLink = () => {
    window.open(this.link, '_blank');
  }

}
