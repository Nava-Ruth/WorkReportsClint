import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByMonthComponent } from './report-by-month.component';

describe('ReportByMonthComponent', () => {
  let component: ReportByMonthComponent;
  let fixture: ComponentFixture<ReportByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportByMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
