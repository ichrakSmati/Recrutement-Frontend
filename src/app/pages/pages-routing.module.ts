import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {QuizComponent} from "./quiz/quiz.component";
import {QuestionComponent} from "./quiz/question/question.component";
import {RecruteurComponent} from "./compte/recruteur/recruteur.component";
import {ListeOffreComponent} from "./liste-offre/liste-offre.component";
import {ListeCandidatsComponent} from "./liste-candidats/liste-candidats.component";
import {ChoixentretienComponent} from "./choixentretien/choixentretien.component";
import {ProfilComponent} from "./compte/profil/profil.component";
import {RoleGuardService as RoleGuard} from "../login/role-guard.service";
import {DeposerOffreComponent} from "./DeposerOffre/deposerOffre.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'DeposerOffre',
      component: DeposerOffreComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'listeOffre',
      component: ListeOffreComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'choixentretien/:id',
      component: ChoixentretienComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'liste',
      component: DeposerOffreComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'offre/:id',
      component: ListeCandidatsComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'quiz',
      component: QuizComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'quiz/:id/question',
      component: QuestionComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
    },
    {
      path: 'recruteurs',
      component: RecruteurComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN'],
      }
    },
    {
      path: 'profil',
      component: ProfilComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: ['ROLE_ADMIN','ROLE_RECRUTEUR'],
      }
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
