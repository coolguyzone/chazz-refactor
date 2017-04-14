import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmnessDropdownComponent } from './firmness-dropdown.component';

describe('FirmnessDropdownComponent', () => {
  let component: FirmnessDropdownComponent;
  let fixture: ComponentFixture<FirmnessDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmnessDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmnessDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
