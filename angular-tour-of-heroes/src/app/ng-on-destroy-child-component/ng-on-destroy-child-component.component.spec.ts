import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnDestroyChildComponentComponent } from './ng-on-destroy-child-component.component';

describe('NgOnDestroyChildComponentComponent', () => {
  let component: NgOnDestroyChildComponentComponent;
  let fixture: ComponentFixture<NgOnDestroyChildComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnDestroyChildComponentComponent]
    });
    fixture = TestBed.createComponent(NgOnDestroyChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
