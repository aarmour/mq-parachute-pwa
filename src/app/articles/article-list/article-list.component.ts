import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ArticlesService } from '../articles.service';

@Component({
  selector: 'pa-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  private heading: String;
  private articles = Observable.from([[]]);

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
