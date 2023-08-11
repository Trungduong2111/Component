import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnDestroyComponentComponent } from './ng-on-destroy-component.component';

describe('NgOnDestroyComponentComponent', () => {
  let component: NgOnDestroyComponentComponent;
  let fixture: ComponentFixture<NgOnDestroyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnDestroyComponentComponent]
    });
    fixture = TestBed.createComponent(NgOnDestroyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
