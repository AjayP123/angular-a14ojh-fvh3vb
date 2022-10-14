import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
  HostListener,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-multiselect',
  templateUrl: './search-multiselect.component.html',
  styleUrls: ['./search-multiselect.component.scss'],
})
export class SearchMultiSelectComponent {
  private readonly filter = new Subject<string>();
  private previousFilter: string | undefined;
  private subscription: Subscription | undefined;
  clickedontextbox: boolean = false;
  inside: boolean = false;

  @Input()
  searchPlaceholder: string | undefined;

  @Input()
  scheduled: boolean | undefined;

  @Output()
  filterChanges = new EventEmitter<string>();

  reportFilterLocal = '';
  get reportFilter(): string {
    return this.reportFilterLocal;
  }

  set reportFilter(value: string) {
    this.reportFilterLocal = value;
    this.filter.next(value);
  }

  public clearSearchBox(): void {
    this.reportFilter = '';
  }

  test() {
    this.clickedontextbox = true;
  }

  @HostListener('click')
  clicked() {
    this.inside = true;
  }
  @HostListener('document:click')
  clickedOut() {
    if (this.inside == true) {
      this.inside = false;
    } else {
      this.clickedontextbox = false;
    }
  }

  ngOnInit() {
    this.subscription = this.filter
      .pipe(debounceTime(300))
      .subscribe((newFilter) => {
        if (newFilter !== this.previousFilter) {
          this.filterChanges.emit(this.reportFilter);
          this.previousFilter = newFilter;
        }
      });
    this.previousFilter = this.reportFilter;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
