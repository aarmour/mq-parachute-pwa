import { Component, OnInit, ViewChild } from '@angular/core';

import { PanelService } from '../shared/panel';

@Component({
  selector: 'pa-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('input') input: any;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
    this.input.nativeElement.focus();
  }

  onPanelClose() {
    this.panelService.close();
  }

}
