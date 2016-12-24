import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navItems = [
    { icon: 'home', label: 'Home' },
    { icon: 'highlight', label: 'Featured' },
    { icon: 'local_airport', label: 'Travel' },
    { icon: 'place', label: 'Local' },
    { icon: 'music_note', label: 'Sounds Local' }
  ];

  constructor(@Inject(DOCUMENT) document: any) {
    const splashEl = document.querySelector('.splash');
    splashEl.addEventListener('transitionend', () => {
      document.body.removeChild(splashEl);
    });

    document.body.classList.remove('loading');
  }

  toggleSideNav(nav) {
    nav.opened ? nav.close() : nav.open();
  }

}
