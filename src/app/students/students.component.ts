import { StudentService } from '../student.service';

import { Component, OnInit } from '@angular/core';

import { Student } from '../student';



@Component({
  selector: 'app-students',

  templateUrl: './students.component.html',

  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  student: Student = {} as Student;
  isEditing: boolean = false;



  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => (this.students = data),
    });
  }

  onCleanEvent() {
    this.isEditing = false;

  }

  onSaveEvent(student: Student) {
    if (this.isEditing) {
      this.studentService.edit(student).subscribe({
        next: () => {
          this.loadStudents();
          this.isEditing = false;
        }
      }
      )
    }
    else {
      this.studentService.save(student).subscribe(
        {
          next: data => {
            this.students.push(data);
          }
        }
      )
    }


  }

  edit(student: Student) {
    this.student = student;
    this.isEditing = true;
  }

  delete(student: Student) {
    if(this.isEditing == false){
    this.studentService.delete(student).subscribe({

      next: () => this.loadStudents()
    })
  }
  }
  


}
