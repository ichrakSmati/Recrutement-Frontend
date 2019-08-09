import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule, NbActionsModule,
  NbButtonModule,
  NbCardModule, NbCheckboxModule, NbInputModule,
  NbListModule, NbRadioModule,
  NbRouteTabsetModule, NbSelectModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import {QuizService} from "../../service/quiz.service";
import {QuestionService} from "../../service/question.service";
import {QuizComponent} from "./quiz.component";
import { CommonModule } from "@angular/common";
import {TablesRoutingModule} from "../tables/tables-routing.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {QuestionComponent} from "./question/question.component";


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
  ],
  exports: [
    FormsModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbInputModule,
  ],
  declarations: [
  QuestionComponent,
  ],
  providers: [
    QuizService,
    QuestionService,
  ],
})
export class QuizModule {

}
