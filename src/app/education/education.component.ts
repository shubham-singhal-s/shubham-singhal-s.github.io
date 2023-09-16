import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  constructor(private themeService: ThemeService) { }

  get lightTheme() {
    return this.themeService.lightMode;
  }

}
