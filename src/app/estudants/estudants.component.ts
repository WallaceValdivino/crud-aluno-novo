import { EstudantService } from './../estudant.service';

import { Component, OnInit } from '@angular/core';

import { Estudant } from '../estudant';

import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-estudants',

  templateUrl: './estudants.component.html',

  styleUrls: ['./estudants.component.css'],
})
export class EstudantsComponent implements OnInit {
  Estudants: Estudant[] = [];
  Estudant: Estudant = {} as Estudant;
  isEditing : boolean = false;



  constructor(private EstudantService: EstudantService) {

  }

  ngOnInit(): void {
    this.loadEstudants();
  }

  loadEstudants() {
    this.EstudantService.getEstudants().subscribe({
      next: (data) => (this.Estudants = data),
    });
  }
  onCleanEvent() {
this.isEditing = false;

  }
  onSaveEvent(estudant: Estudant) {
      if(this.isEditing){
        this.EstudantService.edit(estudant).subscribe({
      next: () =>{
        this.loadEstudants();
        this.isEditing = false;
      }
        }

        )
      }
      else{


          this.EstudantService.save(estudant).subscribe(
            {
              next: data =>{ this.Estudants.push(data);
              }
            }
          )
        }


}

  edit(Estudant : Estudant){
this.Estudant = Estudant;
this.isEditing = true;
  }

  delete(Estudant : Estudant){
    this.EstudantService.delete(Estudant).subscribe({

      next: () => this.loadEstudants()
    })
  }




}
