import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { PanelService } from '../../shared';

@Component({
  selector: 'pa-article-detail-panel',
  templateUrl: './article-detail-panel.component.html',
  styleUrls: ['./article-detail-panel.component.scss']
})
export class ArticleDetailPanelComponent implements OnInit {

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
