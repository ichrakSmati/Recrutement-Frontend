import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {FrontPageComponent} from './front-page/front-page.component';
import {EmploiComponent} from './front-page/emploi/emploi.component';
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./login/inscription/inscription.component";
import {RechercheComponent} from "./front-page/recherche/recherche.component";
import {CandidatComponent} from "./front-page/candidat/candidat.component";
import {ReponseEntretienComponent} from "./front-page/reponse-entretien/reponse-entretien.component";
import {EditorComponent} from "./front-page/editor/editor.component";
import {SuivreComponent} from "./front-page/suivre/suivre.component";
import {ChangePwdComponent} from "./login/changePwd/changePwd.component";
import {RequestPwdComponent} from "./login/RequestPwd/requestPwd.component";
import {RepondreQuizComponent} from "./front-page/repondreQuiz/repondreQuiz.component";
import {RoleGuardService as RoleGuard} from "./login/role-guard.service";

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      {
        path: 'emploi',
        component: EmploiComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_CANDIDAT']
        }
      },
      {
        path: '',
        component: RechercheComponent,
      },
      {
        path: 'candidat',
        component: CandidatComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_CANDIDAT']
        }
      },
      {
        path: 'reponse/:id',
        component: ReponseEntretienComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_CANDIDAT']
        }
      },
      {
        path: 'suivre/:id',
        component: SuivreComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_CANDIDAT']
        }
      },
      {
        path: 'editor/:id',
        component: EditorComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_CANDIDAT']
        }
      },
      {
        path: 'quiz/:quizId/demande/:demandeId',
        component: RepondreQuizComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_CANDIDAT']
        }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/changepwd/:token',
    component: ChangePwdComponent,
  },
  {
    path: 'login/requestpwd',
    component: RequestPwdComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'pages',
    loadChildren: () => import('app/pages/pages.module').then(m => m.PagesModule),
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
