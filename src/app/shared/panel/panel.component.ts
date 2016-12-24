import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pa-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() heading: string;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onCloseClick() {
    this.close.emit();
  }

}
