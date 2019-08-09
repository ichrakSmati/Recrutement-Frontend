import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from './@theme/components/auth';
import {FrontPageComponent} from './front-page/front-page.component';
import {EmploiComponent} from './front-page/emploi/emploi.component';
import {LoginComponent} from "./login/login.component";
import {QuestionComponent} from "./pages/quiz/question/question.component";
import {QuizComponent} from "./pages/quiz/quiz.component";
import {InscriptionComponent} from "./login/inscription/inscription.component";

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
        path: 'suivre/:id',
        component: SuivreComponent,
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
    path: 'inscription',
    component: InscriptionComponent,
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
