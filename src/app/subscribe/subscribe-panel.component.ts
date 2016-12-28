import { Component, OnInit } from '@angular/core';

import { PanelService } from '../shared/panel';

@Component({
  selector: 'pa-subscribe-panel',
  templateUrl: './subscribe-panel.component.html',
  styleUrls: ['./subscribe-panel.component.scss']
})
export class SubscribePanelComponent implements OnInit {

  constructor(private panelService: PanelService) { }

  ngOnInit() {
  }

  onPanelClose() {
    this.panelService.close();
  }

}
