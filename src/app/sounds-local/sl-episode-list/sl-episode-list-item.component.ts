import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pa-sl-episode-list-item',
  templateUrl: './sl-episode-list-item.component.html',
  styleUrls: ['./sl-episode-list-item.component.scss'],
  host: {
    '[class]': 'color'
  }
})
export class SlEpisodeListItemComponent implements OnInit {

  @Input() color;
  @Input() episode;

  constructor() { }

  ngOnInit() {
  }

}
