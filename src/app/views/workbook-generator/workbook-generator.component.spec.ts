import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookGeneratorComponent } from './workbook-generator.component';

describe('WorkbookGeneratorComponent', () => {
  let component: WorkbookGeneratorComponent;
  let fixture: ComponentFixture<WorkbookGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbookGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
