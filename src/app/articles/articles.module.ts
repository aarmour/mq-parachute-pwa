import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleDetailComponent
  ]
})
export class ArticlesModule { }
