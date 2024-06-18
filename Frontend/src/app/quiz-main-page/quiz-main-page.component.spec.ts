import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMainPageComponent } from './quiz-main-page.component';

describe('QuizMainPageComponent', () => {
  let component: QuizMainPageComponent;
  let fixture: ComponentFixture<QuizMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
