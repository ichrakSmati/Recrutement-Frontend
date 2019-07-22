import { NgModule } from '@angular/core';
import {NbCardModule, NbListModule, NbMenuModule, NbUserModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './DeposerOffre/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';


@NgModule({
  imports: [
    NbListModule,
    NbUserModule,
    NbCardModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ListeOffreComponent,
    ListeCandidatsComponent,

  ],
})
export class PagesModule {
}
