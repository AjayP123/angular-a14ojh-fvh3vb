import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent {
  changeAll(inu: boolean) {}
  trackByValue(index: number, item: any) {
    return item.value;
  }
  options: any[] = [
    { label: 'Vehcile 1' },
    { label: 'Vehcile 2' },
    { label: 'Vehcile 3' },
    { label: 'Vehcile 4' },
  ];
}
