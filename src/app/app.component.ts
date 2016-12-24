import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navItems = [
    { icon: 'home', label: 'Home', routerLink: '/home' },
    { icon: 'highlight', label: 'Featured', routerLink: '/articles/topic/featured' },
    { icon: 'local_airport', label: 'Travel', routerLink: '/articles/topic/travel' },
    { icon: 'place', label: 'Local', routerLink: '/articles/topic/local' },
    { icon: 'music_note', label: 'Sounds Local', routerLink: '/sounds-local' }
  ];

  constructor(
    @Inject(DOCUMENT) document: any,
    private router: Router
  ) {
    const splashEl = document.querySelector('.splash');
    splashEl.addEventListener('transitionend', () => {
      document.body.removeChild(splashEl);
    });

    document.body.classList.remove('loading');
  }

  toggleSideNav(nav) {
    nav.opened ? nav.close() : nav.open();
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

}
