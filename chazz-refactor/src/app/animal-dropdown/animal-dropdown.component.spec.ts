import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDropdownComponent } from './animal-dropdown.component';

describe('AnimalDropdownComponent', () => {
  let component: AnimalDropdownComponent;
  let fixture: ComponentFixture<AnimalDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
