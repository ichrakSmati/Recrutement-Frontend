import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixentretienComponent } from './choixentretien.component';

describe('ChoixentretienComponent', () => {
  let component: ChoixentretienComponent;
  let fixture: ComponentFixture<ChoixentretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixentretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixentretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
