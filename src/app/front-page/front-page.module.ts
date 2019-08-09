import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmploiComponent} from "./emploi/emploi.component";
import { EditorComponent } from './editor/editor.component';
import { CandidatComponent } from './candidat/candidat.component';
import {OffreService} from "../services/offre.service";
import {CKEditorModule} from "ng2-ckeditor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemandeService} from "../services/demande.service";
import {CandidatService} from "../services/candidat.service";
import {FileUploadModule} from "ng2-file-upload";
import { EntretienComponent } from './entretien/entretien.component';

import {ToastService} from "../services/toast.service";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {ToastMessagesComponent} from "./toastmessage/toastmessage.component";
import {ReversePipe} from "./toastmessage/reverse.pipe";
import { ReponseEntretienComponent } from './reponse-entretien/reponse-entretien.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from "@angular/material";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {EntretienService} from "../services/entretien.service";
import {SuivreComponent} from "./suivre/suivre.component";

@NgModule({
  declarations: [
EmploiComponent,
    EditorComponent,
    CandidatComponent,
    SuivreComponent,
    EntretienComponent,
    ToastMessagesComponent,
    ReversePipe,
    ReponseEntretienComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    CommonModule,
    FormsModule,
    CKEditorModule,
    FileUploadModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    OffreService,
    DemandeService,
    CandidatService,
    ToastService,
    EntretienService
  ]
})
export class FrontPageModule { }
