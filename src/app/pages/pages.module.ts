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
  NbWindowModule, NbCalendarModule
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './DeposerOffre/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';

import {FormsModule} from "@angular/forms";
import { ChoixentretienComponent } from './choixentretien/choixentretien.component';
import {EntretienService} from "../services/entretien.service";
import { CvthequeComponent } from './cvtheque/cvtheque.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import { ChoixdateComponent } from './choixdate/choixdate.component';
import { ListEntretienComponent } from './list-entretien/list-entretien.component';



@NgModule({
  imports: [
    NbDatepickerModule,
    NbCalendarModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    PdfViewerModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
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
  ],
  declarations: [
    PagesComponent,
    ListeOffreComponent,
    ListeCandidatsComponent,
    ChoixentretienComponent,
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
