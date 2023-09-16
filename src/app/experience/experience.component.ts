import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  constructor(private themeService: ThemeService) { }

  get lightMode() {
    return this.themeService.lightMode;
  }

}
