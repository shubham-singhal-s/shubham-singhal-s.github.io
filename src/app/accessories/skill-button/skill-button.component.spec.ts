import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillButtonComponent } from './skill-button.component';

describe('SkillButtonComponent', () => {
  let component: SkillButtonComponent;
  let fixture: ComponentFixture<SkillButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
