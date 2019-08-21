import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './DeposerOffre/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {QuizComponent} from "./quiz/quiz.component";
import {EmploiComponent} from "../front-page/emploi/emploi.component";
import {QuestionComponent} from "./quiz/question/question.component";
import {RecruteurComponent} from "./compte/recruteur/recruteur.component";
import {ListeOffreComponent} from "./liste-offre/liste-offre.component";
import {ListeCandidatsComponent} from "./liste-candidats/liste-candidats.component";
import {ChoixentretienComponent} from "./choixentretien/choixentretien.component";
import {ProfilComponent} from "./compte/profil/profil.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'DeposerOffre',
      component: ECommerceComponent,
    },
    {
      path: 'listeOffre',
      component: ListeOffreComponent,
    },
    {
      path: 'choixentretien/:id',
      component: ChoixentretienComponent,
    },
    {
      path: 'liste',
      component: DashboardComponent,
    },
    {
      path: 'offre/:id',
      component: ListeCandidatsComponent,
    },
    {
      path: 'quiz',
      component: QuizComponent,
    },
    {
      path: 'quiz/:id/question',
      component: QuestionComponent,
    },
    {
      path: 'recruteurs',
      component: RecruteurComponent,
    },
    {
      path: 'profil',
      component: ProfilComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'DeposerOffre',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
