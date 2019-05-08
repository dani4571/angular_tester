import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercipioExerciseComponent } from './percipio-exercise.component';

describe('PercipioExerciseComponent', () => {
  let component: PercipioExerciseComponent;
  let fixture: ComponentFixture<PercipioExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercipioExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercipioExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
