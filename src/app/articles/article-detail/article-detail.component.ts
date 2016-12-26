import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { PanelService } from '../../shared';

@Component({
  selector: 'pa-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private panel: PanelService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.article = this.articlesService.fetch(params['id']);
      });
  }

  onPanelBack() {
    this.panel.close();
  }

}
