import 'rxjs/add/operator/pairwise';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Event as NavigationEvent, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { PanelService, PanelClose } from './shared/panel';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  previousUrl: string;
  sidenavOpened = false;

  navItems = [
    { icon: 'home', label: 'Home', routerLink: '/home' },
    { icon: 'highlight', label: 'Featured', routerLink: '/articles/topic/featured' },
    { icon: 'local_airport', label: 'Travel', routerLink: '/articles/topic/travel' },
    { icon: 'place', label: 'Local', routerLink: '/articles/topic/local' },
    { icon: 'music_note', label: 'Sounds Local', routerLink: '/sounds-local' }
  ];

  constructor(
    @Inject(DOCUMENT) document: any,
    private router: Router,
    private panelService: PanelService
  ) {
    const splashEl = document.querySelector('.splash');
    splashEl.addEventListener('transitionend', () => {
      document.body.removeChild(splashEl);
    });

    document.body.classList.remove('loading');

    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.sidenavOpened = false;
      }
    });

    router.events.pairwise().subscribe((e) => {
      if (e[0] instanceof NavigationEnd) {
        this.previousUrl = e[0].url;
      }
    });

    panelService.events.subscribe((e) => {
      if (e instanceof PanelClose) {
        if (this.previousUrl) {
          this.router.navigate([this.previousUrl]);
        } else {
          this.router.navigate(['/home']);
        }
      }
    });
  }

  toggleSideNav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

}
