import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RechercheComponent} from "./recherche/recherche.component";
import {EmploiComponent} from "./emploi/emploi.component";
import { RechercheAvanceComponent } from './recherche-avance/recherche-avance.component';
import { CandidatComponent } from './candidat/candidat.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
EmploiComponent,
    RechercheAvanceComponent,
    CandidatComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule

  ]
})
export class FrontPageModule { }
