import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'multiselect-wrapper',
  templateUrl: './multiselect-wrapper.component.html',
  styleUrls: ['./multiselect-wrapper.component.scss'],
})
export class MultiSelectWrapperComponent {
  isMobile: boolean = false;
  layoutChanges$ = this.breakpointObserver
    .observe(['(max-width: 1079px)'])
    .pipe(pluck('matches'))
    .subscribe((isMatched) => {
      this.isMobile = isMatched;
    });
  constructor(private readonly breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.isMobile = window.matchMedia('(pointer:coarse)').matches;
    console.log(this.isMobile);
  }
}
