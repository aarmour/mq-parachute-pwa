import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pa-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  @Input() navItems: Object[] = [];

  constructor() { }

  ngOnInit() {
  }

}
