import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-sounds-local',
  templateUrl: './sounds-local.component.html',
  styleUrls: ['./sounds-local.component.scss']
})
export class SoundsLocalComponent implements OnInit {

  episodes = [
    { slug: 'y-la-bamba', title: 'Y La Bamba', location: 'Portland, OR' },
    { slug: 'the-midnight-pine', title: 'The Midnight Pine', location: 'San Diego, CA' },
    { slug: 'pos', title: 'P.O.S', location: 'Minneapolis, MN' },
    { slug: 'roadkill-ghost-choir', title: 'Roadkill Ghost Choir', location: 'Athens, GA' },
    { slug: 'hembree', title: 'Hembree', location: 'Kansas City, MO' },
    { slug: 'creepoid', title: 'Creepoid', location: 'Philadelphia, PA' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
