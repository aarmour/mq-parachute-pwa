import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pa-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  @Output() openMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openMenuClick($event) {
    this.openMenu.emit($event);
  }

}
