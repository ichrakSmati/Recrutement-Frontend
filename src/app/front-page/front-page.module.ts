import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmploiComponent} from "./emploi/emploi.component";
import { EditorComponent } from './editor/editor.component';
import { CandidatComponent } from './candidat/candidat.component';
import {OffreService} from "../services/offre.service";
import {CKEditorModule} from "ng2-ckeditor";
import {NbCardModule} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {DemandeService} from "../services/demande.service";
import { Router, ActivatedRoute } from '@angular/router';
import {CandidatService} from "../services/candidat.service";

@NgModule({
  declarations: [
EmploiComponent,
    EditorComponent,
    CandidatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [
    OffreService,
    DemandeService,
    CandidatService
  ]
})
export class FrontPageModule { }
