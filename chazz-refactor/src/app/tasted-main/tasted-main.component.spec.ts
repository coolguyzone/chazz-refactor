import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastedMainComponent } from './tasted-main.component';

describe('TastedMainComponent', () => {
  let component: TastedMainComponent;
  let fixture: ComponentFixture<TastedMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastedMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
