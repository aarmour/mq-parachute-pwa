import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { PanelClose } from './panel-close.event';

@Injectable()
export class PanelService {

  events$: Subject<any> = new Subject<any>();

  constructor() { }

  close() {
    this.events$.next(new PanelClose());
  }

  get events() {
    return this.events$.asObservable();
  }

}
