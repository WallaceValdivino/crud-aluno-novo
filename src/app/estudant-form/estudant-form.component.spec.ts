import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudantFormComponent } from './estudant-form.component';

describe('EstudantFormComponent', () => {
  let component: EstudantFormComponent;
  let fixture: ComponentFixture<EstudantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
