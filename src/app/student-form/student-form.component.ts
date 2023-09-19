import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnChanges {
  @Input()
  student: Student = {} as Student;

  @Output()
  saveEvent = new EventEmitter<Student>();

  @Output()
  cleanEvent = new EventEmitter<void>();
  formGroupStudent: FormGroup;
  submitted: boolean = false;
  isEditing : boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupStudent = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.student.id){
      this.formGroupStudent.setValue(this.student);
    }

  }

  save() {
    this.submitted = true;
    if (this.formGroupStudent.valid) {
      this.saveEvent.emit(this.formGroupStudent.value);
      this.formGroupStudent.reset();
      this.submitted = false;
    }
  }
  clean() {
    this.cleanEvent.emit();
    this.formGroupStudent.reset();
    this.submitted = false;

  }
  get name(): any {
    return this.formGroupStudent.get('name');
  }

  get email(): any {
    return this.formGroupStudent.get('email');
  }

  get cpf(): any {
    return this.formGroupStudent.get('cpf');
  }

  get location(): any {
    return this.formGroupStudent.get('location');
  }
}
