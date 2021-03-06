import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ArticlesService } from '../articles.service';

@Component({
  selector: 'pa-article-list-panel',
  templateUrl: './article-list-panel.component.html',
  styleUrls: ['./article-list-panel.component.scss']
})
export class ArticleListPanelComponent implements OnInit {

  heading: String;
  articles = Observable.from([[]]);

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const topic = params['topic'];
        this.heading = topic;
        this.articles = this.articlesService.list(topic);
      });
  }

}
