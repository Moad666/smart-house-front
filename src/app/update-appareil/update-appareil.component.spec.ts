import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppareilComponent } from './update-appareil.component';

describe('UpdateAppareilComponent', () => {
  let component: UpdateAppareilComponent;
  let fixture: ComponentFixture<UpdateAppareilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAppareilComponent]
    });
    fixture = TestBed.createComponent(UpdateAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
