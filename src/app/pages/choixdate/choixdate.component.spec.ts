import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixdateComponent } from './choixdate.component';

describe('ChoixdateComponent', () => {
  let component: ChoixdateComponent;
  let fixture: ComponentFixture<ChoixdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
