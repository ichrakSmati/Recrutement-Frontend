import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule, NbActionsModule,
  NbButtonModule, NbCalendarModule,
  NbCardModule, NbCheckboxModule, NbInputModule,
  NbListModule, NbRadioModule,
  NbRouteTabsetModule, NbSelectModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import {QuizService} from "../../service/quiz.service";
import {QuestionService} from "../../service/question.service";
import { CommonModule } from "@angular/common";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CompteService} from "../../service/compte.service";
import {RecruteurComponent} from "./recruteur/recruteur.component";
import {MatButtonModule, MatIconModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbActionsModule,
    NbSelectModule,
    NbInputModule ,
    Ng2SmartTableModule,
    NbRadioModule,
    NbCheckboxModule,
    MatButtonModule,
    MatIconModule,
    NbCalendarModule
  ],
  exports: [
    FormsModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbInputModule,
  ],
  declarations: [
  RecruteurComponent,
  ],
  providers: [
    CompteService,
  ],
})
export class CompteModule {

}
