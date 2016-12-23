export class HTMLElementStub {

  addEventListener = jasmine.createSpy('addEventListener').and.callFake((eventName, callback) => callback());
  classList = jasmine.createSpyObj('classList', ['add', 'remove']);
  removeChild = jasmine.createSpy('removeChild');

}
