import { Component, HostListener, Input } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() onTop = true;
  mobile = false;

  constructor(
    private scrollService: ScrollService,
    private themeService: ThemeService
  ) {
    this.mobile = window.innerWidth < 1220;
  }

  @HostListener('window:resize')
  onResize() {
    this.mobile = window.innerWidth < 1220;
  }

  get lightMode() {
    return this.themeService.lightMode;
  }

  scrollTo(page: string) {
    this.scrollService.scrollToPage.emit(page);
  }

  downloadResume() {}
}
