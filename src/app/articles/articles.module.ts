import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleHeadingComponent } from './article-detail/article-heading.component';
import { ArticlesService } from './articles.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleHeadingComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
