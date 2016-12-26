import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../articles';

@Component({
  selector: 'pa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeArticles;

  constructor(private articles: ArticlesService) { }

  ngOnInit() {
    this.homeArticles = this.articles.list();
  }

}
