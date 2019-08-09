import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseEntretienComponent } from './reponse-entretien.component';

describe('ReponseEntretienComponent', () => {
  let component: ReponseEntretienComponent;
  let fixture: ComponentFixture<ReponseEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
