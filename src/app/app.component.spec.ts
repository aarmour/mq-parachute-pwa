/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DocumentStub } from '../testing/document.stub';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MaterialModule.forRoot()
      ],
      declarations: [
        AppComponent
      ]
    });

    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: DOCUMENT, useClass: DocumentStub }
        ]
      }
    });

    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should remove the loading class from the body element', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let document = fixture.debugElement.injector.get(DOCUMENT);
    expect(document.body.classList.remove).toHaveBeenCalledWith('loading');
  }));
});
