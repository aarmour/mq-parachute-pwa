import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pa-sl-episode-list',
  templateUrl: './sl-episode-list.component.html',
  styleUrls: ['./sl-episode-list.component.scss']
})
export class SlEpisodeListComponent implements OnInit {

  @Input() episodes = [];

  constructor() { }

  ngOnInit() {
  }

}
