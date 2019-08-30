import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbDatepickerModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule, NbInputModule,
  NbListModule,
  NbMenuModule, NbPopoverModule, NbSelectModule, NbTabsetModule, NbTooltipModule,
  NbUserModule,
  NbAccordionModule, NbIconModule,
  NbCalendarModule,NbWindowModule
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {QuizComponent} from "./quiz/quiz.component";
import {QuizModule} from "./quiz/quiz.module";
import {CompteModule} from "./compte/compte.module";
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import {FormsModule} from "@angular/forms";
import { ChoixentretienComponent } from './choixentretien/choixentretien.component';
import {EntretienService} from "../services/entretien.service";
import {DeposerOffreModule} from "./DeposerOffre/deposerOffre.module";
import {DeposerOffreComponent} from "./DeposerOffre/deposerOffre.component";
import {ModifierOffreComponent} from "./liste-offre/modifier-offre/modifierOffre.component";
import { CvthequeComponent } from './cvtheque/cvtheque.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import { ChoixdateComponent } from './choixdate/choixdate.component';
import { ListEntretienComponent } from './list-entretien/list-entretien.component';



@NgModule({
  imports: [
    NbIconModule,
    NbDatepickerModule,
    NbCalendarModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    PdfViewerModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    QuizModule,
    CompteModule,
    FormsModule,
    ThemeModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCheckboxModule,
    NbTabsetModule,
    NbPopoverModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbTooltipModule,
    NbAccordionModule,
    DeposerOffreModule,
  ],
  declarations: [
    ModifierOffreComponent,
    QuizComponent,
    PagesComponent,
    ListeOffreComponent,
    ListeCandidatsComponent,
    ChoixentretienComponent,
    DeposerOffreComponent,
    CvthequeComponent,
    ChoixdateComponent,
    ListEntretienComponent,

  ],
  providers:[
    EntretienService,
  ]
})
export class PagesModule {
}
