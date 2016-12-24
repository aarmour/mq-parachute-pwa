import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
