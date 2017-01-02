import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'pa-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  @Input() opened: Boolean = true;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onBackdropClick() {
    this.opened = false;
    this.close.emit();
  }

}
