import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { SoundsLocalComponent } from './sounds-local.component';
import { SlEpisodeListComponent } from './sl-episode-list/sl-episode-list.component';
import { SlEpisodeListItemComponent } from './sl-episode-list/sl-episode-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
    SoundsLocalComponent,
    SlEpisodeListComponent,
    SlEpisodeListItemComponent
  ],
  exports: [
    SoundsLocalComponent
  ],
  providers: []
})
export class SoundsLocalModule { }
