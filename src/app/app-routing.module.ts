import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {FrontPageComponent} from './front-page/front-page.component';
import {EmploiComponent} from './front-page/emploi/emploi.component';
import {RechercheComponent} from "./front-page/recherche/recherche.component";
import {CandidatComponent} from "./front-page/candidat/candidat.component";
import {LoginComponent} from "./login/login.component";
import {EditorComponent} from "./front-page/editor/editor.component";
import {ReponseEntretienComponent} from "./front-page/reponse-entretien/reponse-entretien.component";
const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      {
        path: 'emploi',
        component: EmploiComponent,
      },
      {
        path: '',
        component: RechercheComponent,
      },
      {
        path: 'candidat',
        component: CandidatComponent,
      },
      {
        path: 'reponse/:id',
        component: ReponseEntretienComponent,
      },
      {
        path: 'editor/:id',
        component: EditorComponent,
      },
    ]
  },
  {
    path: 'singin',
    component: LoginComponent,
  },
  {
    path: 'pages',
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
