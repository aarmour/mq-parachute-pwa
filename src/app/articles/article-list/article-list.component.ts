import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pa-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles;

  constructor() { }

  ngOnInit() {
  }

}
