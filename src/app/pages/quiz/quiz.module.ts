import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule, NbActionsModule,
  NbButtonModule,
  NbCardModule, NbInputModule,
  NbListModule,
  NbRouteTabsetModule, NbSelectModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import {QuizService} from "../../service/quiz.service";


@NgModule({
  imports: [
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
    NbInputModule

  ],
  exports: [
    FormsModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbInputModule,
  ],
  declarations: [
  ],
  providers: [
    QuizService
  ],
})
export class QuizModule {

}
