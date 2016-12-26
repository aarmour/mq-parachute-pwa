import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ArticleListPanelComponent } from './article-list/article-list-panel.component';
import { ArticleDetailPanelComponent } from './article-detail/article-detail-panel.component';
import { ArticleHeadingComponent } from './article-detail/article-heading.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesService } from './articles.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
    ArticleListPanelComponent,
    ArticleDetailPanelComponent,
    ArticleHeadingComponent,
    ArticleListComponent
  ],
  exports: [
    ArticleListPanelComponent,
    ArticleDetailPanelComponent,
    ArticleListComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
