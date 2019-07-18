import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmploiComponent} from "./emploi/emploi.component";
import { RechercheAvanceComponent } from './recherche-avance/recherche-avance.component';
import { CandidatComponent } from './candidat/candidat.component';

@NgModule({
  declarations: [
EmploiComponent,
    RechercheAvanceComponent,
    CandidatComponent,
  ],
  imports: [
    CommonModule

  ]
})
export class FrontPageModule { }
