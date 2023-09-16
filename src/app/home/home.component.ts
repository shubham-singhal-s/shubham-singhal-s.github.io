import { Component, Input } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() onTop = true;

  constructor(private scrollService: ScrollService) { }
  
  scrollTo(page: string) {
    this.scrollService.scrollToPage.emit(page);
  }

}