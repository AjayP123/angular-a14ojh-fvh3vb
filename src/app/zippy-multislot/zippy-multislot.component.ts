import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-multislot',
  template: `
  <section>
  <mat-toolbar class='toolbar'>
   <div>
    <button mat-button class='button'> Export Csv</button>
    </div>
    </mat-toolbar>
  </section>
  <section class="summary">
  <div class="header">
  EV Summary
  </div>
  <div class='sub-header'> Created : 10 june 2022 08:50:11</div>
  <div class='footer'>Reports Total For : 05/06/2022-06/06/2022</div>
  </section>
  `,
  styleUrls: ['./zippy-multislot.component.scss'],
})
export class ZippyMultislotComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
