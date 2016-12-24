import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    BottomNavComponent,
    NavListComponent
  ],
  exports: [
    BottomNavComponent,
    NavListComponent
  ]
})
export class SharedModule { }
