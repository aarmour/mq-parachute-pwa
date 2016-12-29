import 'rxjs/add/operator/pairwise';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Event as NavigationEvent, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { PanelService, PanelClose } from './shared/panel';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  previousUrl: string;
  sidenavContentEl;
  sidenavOpened = false;

  navItems = [
    { icon: 'home', label: 'Home', routerLink: '/home' },
    { icon: 'highlight', label: 'Featured', routerLink: '/articles/topic/featured' },
    { icon: 'local_airport', label: 'Travel', routerLink: '/articles/topic/travel' },
    { icon: 'place', label: 'Local', routerLink: '/articles/topic/local' },
    { icon: 'music_note', label: 'Sounds Local', routerLink: '/sounds-local' }
  ];

  constructor(
    @Inject(DOCUMENT) private document: any,
    private el: ElementRef,
    private router: Router,
    private panelService: PanelService
  ) { }

  ngOnInit() {
    this.hideSplash();

    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.sidenavOpened = false;
      }
    });

    this.router.events.pairwise().subscribe((e) => {
      if (e[0] instanceof NavigationEnd) {
        this.previousUrl = e[0].url;
        if (this.sidenavContentEl) {
          this.sidenavContentEl.scrollTop = 0;
        }
      }
    });

    this.panelService.events.subscribe((e) => {
      if (e instanceof PanelClose) {
        if (this.previousUrl) {
          this.router.navigate([this.previousUrl]);
        } else {
          this.router.navigate(['/home']);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.sidenavContentEl = this.el.nativeElement.querySelector('.md-sidenav-content');
  }

  hideSplash() {
    const splashEl = document.querySelector('.splash');

    splashEl.addEventListener('transitionend', () => {
      this.document.body.removeChild(splashEl);
    });

    this.document.body.classList.remove('loading');
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  onSelectNavMenuItem($event) {
    this.router.navigate(['/', $event.menuItem]);
  }

  toggleSideNav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
