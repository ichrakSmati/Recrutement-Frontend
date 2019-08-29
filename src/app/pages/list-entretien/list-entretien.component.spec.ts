import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntretienComponent } from './list-entretien.component';

describe('ListEntretienComponent', () => {
  let component: ListEntretienComponent;
  let fixture: ComponentFixture<ListEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
