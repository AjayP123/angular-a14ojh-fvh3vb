import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-multislot',
  templateUrl: './zippy-multislot.component.html',
  styleUrls: ['./zippy-multislot.component.scss'],
})
export class ZippyMultislotComponent {
  public readonly items: Array<number> = [1];
  public readonly: Array<{ header: string; templateType: number }> = [
    { header: 'Start Date-End Date', templateType: 2 },
    { header: 'Start Time-End Time', templateType: 2 },
    { header: 'Battery Start-Battery End', templateType: 2 },
    { header: 'Total Charging Duration', templateType: 1 },
    { header: 'Charging Location', templateType: 1 },
  ];
  displayedColumns = [
    'auditEventType',
    'serialNumber',
    'createdBy',
    'responsive',
  ];
  totalColumns = ['total'];
  public auditLogs = [
    { auditEventType: '06/07/2022', serialNumber: 1, createdBy: 'test_a' },
    { auditEventType: 'test', serialNumber: 1, createdBy: 'test_a' },
    { auditEventType: 'test', serialNumber: 1, createdBy: 'test_a' },
    { auditEventType: 'test', serialNumber: 1, createdBy: 'test_a' },
  ];
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
