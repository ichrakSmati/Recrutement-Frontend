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
  NbWindowModule
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



@NgModule({
  imports: [
    NbDatepickerModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
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

  ],
  providers:[
    EntretienService,
  ]
})
export class PagesModule {
}
