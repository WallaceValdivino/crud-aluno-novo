import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudantsComponent } from './estudants.component';

describe('EstudantsComponent', () => {
  let component: EstudantsComponent;
  let fixture: ComponentFixture<EstudantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
