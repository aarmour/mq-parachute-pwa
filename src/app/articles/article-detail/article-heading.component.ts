import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pa-article-heading',
  templateUrl: './article-heading.component.html',
  styleUrls: ['./article-heading.component.scss']
})
export class ArticleHeadingComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit() {
  }

}
