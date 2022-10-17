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
    { label: 'Vehcile 5' },
    { label: 'Vehcile 6' },
    { label: 'Vehcile 7' },
    { label: 'Vehcile 8' },
    { label: 'Vehcile 9' },
    { label: 'Vehcile 10' },
    { label: 'Vehcile 11' },
    { label: 'Vehcile 12' },
    { label: 'Vehcile 13' },
    { label: 'Vehcile 14' },
    { label: 'Vehcile 15' },
    { label: 'Vehcile 16' },
  ];
}
