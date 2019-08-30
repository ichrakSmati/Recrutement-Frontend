import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvthequeComponent } from './cvtheque.component';

describe('CvthequeComponent', () => {
  let component: CvthequeComponent;
  let fixture: ComponentFixture<CvthequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvthequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvthequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
