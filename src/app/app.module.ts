import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudantsComponent } from './estudants/estudants.component';
import { EstudantFormComponent } from './estudant-form/estudant-form.component';
import { EstudantComponent } from './estudant/estudant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EstudantsComponent,
    EstudantFormComponent,
    EstudantComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
