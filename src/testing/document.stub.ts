import { HTMLElementStub } from './html-element.stub';

export class DocumentStub {

  body = new HTMLElementStub();
  querySelector = jasmine.createSpy('querySelector').and.returnValue(new HTMLElementStub());
  querySelectorAll = jasmine.createSpy('querySelectorAll');

}
