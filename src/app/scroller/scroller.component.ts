import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, Subject, takeUntil } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('home', { read: ElementRef, static: false }) private home!: ElementRef;
  @ViewChild('skills', { read: ElementRef, static: false }) private skills!: ElementRef;
  @ViewChild('experience', { read: ElementRef, static: false }) private experience!: ElementRef;
  @ViewChild('education', { read: ElementRef, static: false }) private education!: ElementRef;

  @Input() currentPage = 0;
  @Output('setPage') setPage = new EventEmitter<number>();

  onTop = true;

  midPoints = [0, 0];

  private readonly destroy$ = new Subject<boolean>();

  constructor(private scrollService: ScrollService) {
    fromEvent(window, 'scroll')
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.onScroll();
      });

      this.scrollService.scrollToPage.subscribe((page: string) => {
        this.scrollToPage(page);
      });
  }

  ngAfterViewInit(): void {
    this.midPoints[0] = window.scrollY + this.home.nativeElement.getBoundingClientRect().top + (this.home.nativeElement.scrollHeight / 2);
    this.midPoints[1] = window.scrollY + this.skills.nativeElement.getBoundingClientRect().top + (this.skills.nativeElement.scrollHeight / 2);
    this.midPoints[2] = window.scrollY + this.experience.nativeElement.getBoundingClientRect().top + (this.experience.nativeElement.scrollHeight / 2);
    this.midPoints[3] = window.scrollY + this.education.nativeElement.getBoundingClientRect().top + (this.education.nativeElement.scrollHeight / 2);
  }

  scrollToPage(page: string) {
    switch (page) {
      case 'home':
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.setPage.emit(0);
        break;
      case 'skills':
        this.skills.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.setPage.emit(1);
        break;
      case 'experience':
        this.experience.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.setPage.emit(2);
        break;
      case 'education':
        this.education.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.setPage.emit(3);
        break;
      default:
        break;
    }
  }

  onScroll() {
    // if (this.onTop && window.scrollY > 100) {
    //   this.onTop = false;
    // }
    this.onTop = window.scrollY < 100;
    const scrollTop = window.scrollY;
    const nearestPage = this.midPoints.reduce((prev, curr) => {
      return (Math.abs(curr - scrollTop) < Math.abs(prev - scrollTop) ? curr : prev);
    });
    const index = this.midPoints.indexOf(nearestPage);
    if (index === this.currentPage) {
      return;
    }
    this.setPage.emit(index);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
