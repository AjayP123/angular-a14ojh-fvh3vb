import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  ZippyComponent,
  ZippyContentDirective,
  ZippyToggleDirective,
} from './example-zippy.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectasComponent } from './zippy-ngprojectas/zippy-ngprojectas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableBasicComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { SearchMultiSelectComponent } from './multiselect/search-multiselect.component';
import { CheckboxListComponent } from './checkboxlist/checkbox-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ZippyComponent,
    ZippyToggleDirective,
    ZippyContentDirective,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyNgprojectasComponent,
    TableBasicComponent,
    SearchMultiSelectComponent,
    CheckboxListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
