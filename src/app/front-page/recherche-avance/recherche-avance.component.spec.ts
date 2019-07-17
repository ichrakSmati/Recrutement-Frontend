import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAvanceComponent } from './recherche-avance.component';

describe('RechercheAvanceComponent', () => {
  let component: RechercheAvanceComponent;
  let fixture: ComponentFixture<RechercheAvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheAvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
