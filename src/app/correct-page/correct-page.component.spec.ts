import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectPageComponent } from './correct-page.component';

describe('CorrectPageComponent', () => {
  let component: CorrectPageComponent;
  let fixture: ComponentFixture<CorrectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
