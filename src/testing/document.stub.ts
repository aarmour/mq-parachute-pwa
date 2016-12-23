import { HTMLElementStub } from './html-element.stub';

export class DocumentStub {

  body = new HTMLElementStub();
  querySelectorAll = jasmine.createSpy('querySelectorAll');

}
