import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastedTopComponent } from './tasted-top.component';

describe('TastedTopComponent', () => {
  let component: TastedTopComponent;
  let fixture: ComponentFixture<TastedTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastedTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastedTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
