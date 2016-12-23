import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    BottomNavComponent
  ],
  exports: [
    BottomNavComponent
  ]
})
export class SharedModule { }
