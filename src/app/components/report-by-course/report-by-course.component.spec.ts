import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByCourseComponent } from './report-by-course.component';

describe('ReportByCourseComponent', () => {
  let component: ReportByCourseComponent;
  let fixture: ComponentFixture<ReportByCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportByCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
