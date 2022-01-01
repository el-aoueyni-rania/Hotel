import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurationDetailsComponent } from './restauration-details.component';

describe('RestaurationDetailsComponent', () => {
  let component: RestaurationDetailsComponent;
  let fixture: ComponentFixture<RestaurationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
