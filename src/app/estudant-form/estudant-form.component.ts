import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudant } from '../estudant';


@Component({
  selector: 'app-estudant-form',
  templateUrl: './estudant-form.component.html',
  styleUrls: ['./estudant-form.component.css']
})
export class EstudantFormComponent implements OnChanges {
  @Input()
  Estudant: Estudant = {} as Estudant;

  @Output()
  saveEvent = new EventEmitter<Estudant>();

  @Output()
  cleanEvent = new EventEmitter<void>();
  formGroupEstudant: FormGroup;
  submitted: boolean = false;
  isEditing : boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupEstudant = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupEstudant.setValue(this.Estudant);
  }

  save() {
    this.submitted = true;
    if (this.formGroupEstudant.valid) {
      this.saveEvent.emit(this.formGroupEstudant.value);
      this.formGroupEstudant.reset();
      this.submitted = false;
    }
  }
  clean() {
    this.cleanEvent.emit();
    this.formGroupEstudant.reset();
    this.submitted = false;

  }
  get name(): any {
    return this.formGroupEstudant.get('name');
  }

  get email(): any {
    return this.formGroupEstudant.get('email');
  }
}
