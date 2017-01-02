import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { PanelComponent, PanelService } from './panel';
import { FadeImageDirective } from './fade-image.directive';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    BottomNavComponent,
    NavListComponent,
    PanelComponent,
    FadeImageDirective,
    SideNavComponent
  ],
  exports: [
    BottomNavComponent,
    FadeImageDirective,
    NavListComponent,
    PanelComponent,
    SideNavComponent
  ],
  providers: [
    PanelService
  ]
})
export class SharedModule { }
