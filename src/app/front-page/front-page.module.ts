import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmploiComponent} from "./emploi/emploi.component";
import { RechercheAvanceComponent } from './recherche-avance/recherche-avance.component';
import { CandidatComponent } from './candidat/candidat.component';
import {OffreService} from "../services/offre.service";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./recherche/filtre.pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {RechercheComponent} from "./recherche/recherche.component";

@NgModule({
  declarations: [
EmploiComponent,
    RechercheAvanceComponent,
    CandidatComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    OffreService,
  ]
})
export class FrontPageModule { }
