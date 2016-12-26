import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pa-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() heading: string;
  @Input() mode: 'close|back';
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onBackClick() {
    this.back.emit();
  }

  onCloseClick() {
    this.close.emit();
  }

}
