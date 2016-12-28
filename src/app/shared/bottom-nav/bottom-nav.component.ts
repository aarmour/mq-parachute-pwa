import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pa-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  @Output() openMenu: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() selectMenuItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onOpenMenuClick($event) {
    this.openMenu.emit($event);
  }

  onSearchClick($event) {
    this.search.emit($event);
  }

  onMenuItemClick(menuItem) {
    console.log('onMenuItemClick:', menuItem);
    this.selectMenuItem.emit({ menuItem });
  }

}
